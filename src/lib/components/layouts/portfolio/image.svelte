<script lang="ts" context="module">
	import { Image } from '$lib/components';
	import type { Image as Data } from '^data/portfolio';
	import { calcMaxDimensions } from '^helpers';
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade } from 'svelte/transition';
</script>

<script lang="ts">
	export let imageContainerHeight: number;
	export let data: Data['image'];
	export let id: string;
	export let loading: 'eager' | 'lazy';

	let transformStatus: 'idle' | 'opening' | 'open' | 'closing' = 'idle';

	const [sendImg, receiveImg] = crossfade({
		duration: 1200,
		easing: quintOut,
		delay: 0
	});

	const handleOpenImage = () => {
		transformStatus = 'opening';

		setTimeout(() => {
			if (transformStatus === 'opening') {
				transformStatus = 'open';
			}
		}, 1200);
	};

	const handleCloseImage = () => {
		transformStatus = 'closing';

		setTimeout(() => {
			if (transformStatus === 'closing') {
				transformStatus = 'idle';
			}
		}, 1200);
	};

	let screenWidth: number;
	let screenHeight: number;

	let transfromedDimensions: { width: number; height: number };

	$: {
		if (screenHeight && screenWidth) {
			transfromedDimensions = calcMaxDimensions({
				parent: { width: screenWidth, height: screenHeight },
				child: { width: data.img.w, height: data.img.h }
			});
		}
	}
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

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
					handleOpenImage();
				} else {
					handleCloseImage();
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
			on:click={handleCloseImage}
			transition:fade
		>
			<div
				class="relative"
				style:height="{transfromedDimensions.height}px"
				style:width="{transfromedDimensions.width}px"
				in:receiveImg={{ key: id }}
				out:sendImg={{ key: id }}
			>
				<Image meta={data} imageClass="h-full w-full" />
			</div>
		</div>
	{/if}
</div>
