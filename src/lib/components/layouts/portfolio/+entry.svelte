<script lang="ts" context="module">
	import type { PortfolioData } from '^data/portfolio';
	import Image from './image.svelte';
	import Video from './video.svelte';
</script>

<script lang="ts">
	export let data: PortfolioData;

	let imageContainerHeight: number;

	let imageScrollNode: HTMLDivElement;

	function smoothScroll(container: HTMLElement, event: WheelEvent, duration: number = 1000) {
		const startX = container.scrollLeft;
		const startTime = performance.now();

		function scrollAnimation(currentTime: number) {
			const elapsedTime = currentTime - startTime;
			const progress = Math.min(elapsedTime / duration, 1);
			// const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

			const scrollAmount = event.deltaY >= 0 ? event.deltaY + 300 : event.deltaY - 300;

			container.scrollLeft = startX + scrollAmount * progress;
			// container.scrollLeft = startX + scrollAmount * easeInOutQuad(progress);

			if (progress < 1) {
				requestAnimationFrame(scrollAnimation);
			}
		}

		requestAnimationFrame(scrollAnimation);
	}

	$: {
		if (imageScrollNode) {
			imageScrollNode.addEventListener('wheel', (e) => smoothScroll(imageScrollNode, e, 400), {
				passive: false
			});
		}
	}
</script>

<div class="mt-md h-full md:flex-grow pl-md pr-md md:pr-0 flex flex-col gap-xl md:flex-row">
	<div class="md:max-w-[405px] shrink-0">
		<h1 class="uppercase tracking-wide">{data.title}</h1>

		<br />

		<p>
			{@html data.description}
		</p>
	</div>

	<div
		class="relative w-full h-[70vh] md:w-full md:h-full overflow-hidden"
		bind:clientHeight={imageContainerHeight}
	>
		{#if imageContainerHeight}
			<div
				class="absolute w-full overflow-x-scroll overflow-y-hidden flex gap-md pb-md pr-md"
				style:height="{imageContainerHeight}px"
				bind:this={imageScrollNode}
			>
				{#each data.media as media, i}
					{#if media.type === 'image'}
						<Image
							data={media.image}
							id={`image-${i}`}
							bind:imageContainerHeight
							loading={i === 0 ? 'eager' : 'lazy'}
						/>
					{:else}
						<Video
							data={media}
							id={`image-${i}`}
							bind:imagesContainerHeight={imageContainerHeight}
							loading={i === 0 ? 'eager' : 'lazy'}
						/>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>
