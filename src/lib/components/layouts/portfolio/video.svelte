<script lang="ts" context="module">
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade } from 'svelte/transition';

	import { Image, YoutubeIframe } from '^components';
	import type { YoutubeVideo as Data } from '^data/portfolio';
	import { images } from '^assets/images';
	import { calcMaxDimensions } from '^helpers';
</script>

<script lang="ts">
	export let imagesContainerHeight: number;
	export let data: Data;
	export let id: string;

	let transformStatus: 'idle' | 'opening' | 'open' | 'closing' = 'idle';

	$: console.log('transformStatus:', transformStatus);

	const [sendImg, receiveImg] = crossfade({
		duration: 1200,
		easing: quintOut,
		delay: 0
	});

	let screenWidth: number;
	let screenHeight: number;

	let transfromedDimensions: { width: number; height: number };

	$: {
		if (screenHeight && screenWidth) {
			const clickOutsideTextHeight = 20;
			const containerMaxHeight = screenHeight - clickOutsideTextHeight;

			transfromedDimensions = calcMaxDimensions({
				parent: { width: screenWidth, height: containerMaxHeight },
				child: { width: data.image.img.w, height: data.image.img.h }
			});
		}
	}

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
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="shrink-0 relative"
	style:height="{data.image.img.h}px"
	style:max-height="{imagesContainerHeight - 20}px"
	style:aspect-ratio={16 / 9}
>
	{#if transformStatus === 'idle' || transformStatus === 'closing'}
		<div
			class="absolute w-full h-full cursor-pointer"
			on:click={handleOpen}
			in:receiveImg={{ key: id }}
			out:sendImg={{ key: id }}
		>
			<div class="absolute w-full h-full z-10">
				<Image meta={data.image} imageClass="h-full w-full object-cover" />

				<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px]">
					<Image meta={images.icon.youtube} imageClass="h-full w-full" />
				</div>
			</div>
		</div>
	{:else}
		<div
			class="fixed inset-0 z-30 bg-white cursor-zoom-out"
			on:click={handleClose}
			transition:fade={{ duration: 400 }}
		/>

		<div class="fixed inset-0 grid place-items-center z-40 cursor-zoom-out" on:click={handleClose}>
			<div>
				<div
					class="relative"
					style:width="{transfromedDimensions.width}px"
					style:aspect-ratio={16 / 9}
					in:receiveImg={{ key: id }}
					out:sendImg={{ key: id }}
				>
					<div class="absolute w-full h-full">
						<YoutubeIframe url={data.url} />
					</div>
				</div>

				{#if transformStatus === 'open'}
					<p>Click video to play. Click outside to close</p>
				{/if}
			</div>
		</div>
	{/if}
</div>
