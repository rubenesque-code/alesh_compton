<script lang="ts" context="module">
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade } from 'svelte/transition';

	import type { Image as Data } from '^data/portfolio';

	import { CalcMaxDimensions, Image } from '^components';
</script>

<script lang="ts">
	export let imageContainerHeight: number;
	export let data: Data['image'];
	export let id: string;
	export let loading: 'eager' | 'lazy';

	let transformedDimensions: { width: number; height: number };

	const [sendImg, receiveImg] = crossfade({
		duration: 1200,
		easing: quintOut,
		delay: 0
	});

	let transformStatus: 'idle' | 'opening' | 'open' | 'closing' = 'idle';

	const handleOpen = () => {
		transformStatus = 'opening';

		setTimeout(() => {
			if (transformStatus === 'opening') {
				transformStatus = 'open';
			}
		}, 1200);
	};

	const handleClose = () => {
		transformStatus = 'closing';

		setTimeout(() => {
			if (transformStatus === 'closing') {
				transformStatus = 'idle';
			}
		}, 1200);
	};

	$: {
		if (document) {
			document.addEventListener('keydown', (event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					handleClose();
				}
			});
		}
	}
</script>

<CalcMaxDimensions
	initial={{ width: data.img.w, height: data.img.h }}
	bind:transformed={transformedDimensions}
/>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="shrink-0 relative bg-gray-50"
	style:height="{data.img.h}px"
	style:max-height="{imageContainerHeight - 20}px"
	style:aspect-ratio={data.img.w / data.img.h}
>
	{#if transformStatus === 'idle' || transformStatus === 'closing'}
		<div
			class="absolute w-full h-full cursor-pointer"
			on:click={() => {
				if (transformStatus === 'idle' || transformStatus === 'closing') {
					handleOpen();
				} else {
					handleClose();
				}
			}}
			in:receiveImg={{ key: id }}
			out:sendImg={{ key: id }}
		>
			<Image meta={data} imageClass="h-full w-full" {loading} />
		</div>
	{:else}
		<div
			class="fixed inset-0 grid place-items-center z-40 bg-white cursor-zoom-out"
			on:click={() => handleClose()}
			transition:fade
		>
			<div
				class="relative"
				style:height="{transformedDimensions.height}px"
				style:width="{transformedDimensions.width}px"
				in:receiveImg={{ key: id }}
				out:sendImg={{ key: id }}
			>
				<Image meta={data} imageClass="h-full w-full" />
			</div>
		</div>
	{/if}
</div>
