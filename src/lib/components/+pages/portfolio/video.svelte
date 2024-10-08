<script lang="ts" context="module">
	import { quintOut } from 'svelte/easing';
	import { crossfade, fade } from 'svelte/transition';

	import { calcMaxDimensions } from '^helpers';

	import { images } from '^assets/images';

	import type { YoutubeVideo as Data } from '^data/portfolio';

	import { Image, YoutubeIframe } from '^components';
</script>

<script lang="ts">
	// export let imagesContainerHeight: number;
	export let data: Data;
	export let id: string;
	export let loading: 'eager' | 'lazy';

	let screenWidth: number;
	let screenHeight: number;

	let transformedDimensions: { width: number; height: number };

	let transformStatus: 'idle' | 'opening' | 'open' | 'closing' = 'idle';

	const [sendImg, receiveImg] = crossfade({
		duration: 1200,
		easing: quintOut,
		delay: 0
	});

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
		if (screenHeight && screenWidth) {
			const clickOutsideTextHeight = 20;
			const containerMaxHeight = screenHeight - clickOutsideTextHeight;

			transformedDimensions = calcMaxDimensions({
				transformContainer: { width: screenWidth, height: containerMaxHeight },
				initial: { width: 1280, height: 720 }
			});
		}
	}

	$: {
		if (document) {
			document.addEventListener('keydown', (event: KeyboardEvent) => {
				if (event.key === 'Escape') {
					handleClose();
				}
			});
		}
	}

	let containerHeight: number;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="shrink-0 flex flex-col justify-between"
	bind:clientHeight={containerHeight}
	style:width="{(containerHeight * 16) / 9}px"
>
	<div class=" relative bg-gray-50 flex-grow aspect-video">
		{#if transformStatus === 'idle' || transformStatus === 'closing'}
			<div
				class="absolute w-full h-full cursor-pointer"
				on:click={handleOpen}
				in:receiveImg={{ key: id }}
				out:sendImg={{ key: id }}
			>
				<div class="absolute w-full h-full z-10">
					<Image meta={data.image} imageClass="h-full w-full object-cover" {loading} />

					<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px]">
						<Image meta={images.icon.youtube} imageClass="h-full w-full" {loading} />
					</div>
				</div>
			</div>
		{:else}
			<div class="fixed inset-0 z-30 bg-white cursor-zoom-out" transition:fade />

			<div
				class="fixed inset-0 grid place-items-center z-40 cursor-zoom-out"
				on:click={handleClose}
			>
				<div>
					<div
						class="relative"
						style:width="{transformedDimensions.width}px"
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
	{#if data.title}
		<h4 class="uppercase text-sm sm:text-base md:text-lg">{data.title}</h4>
	{/if}
</div>

<!-- style:height="{720}px" -->
<!-- style:max-height="{imagesContainerHeight - 20}px" -->
