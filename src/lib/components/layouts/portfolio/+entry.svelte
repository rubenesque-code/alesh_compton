<script lang="ts" context="module">
	import type { PortfolioData } from '^data/portfolio';
	import { Footer, Header } from '^sections';
	import Image from './image.svelte';
	import Video from './video.svelte';
</script>

<script lang="ts">
	export let data: PortfolioData;

	let imageContainerHeight: number;

	let imageScrollNode: HTMLDivElement;

	$: {
		if (imageScrollNode) {
			imageScrollNode.style.scrollBehavior = 'smooth';

			imageScrollNode.addEventListener('wheel', (event) => {
				event.preventDefault();

				const scrollAmount =
					event.deltaY >= 0
						? imageScrollNode.scrollLeft + event.deltaY + 200
						: imageScrollNode.scrollLeft + event.deltaY - 200;

				imageScrollNode.scrollTo({
					left: scrollAmount,
					behavior: 'smooth'
				});
			});
		}
	}
</script>

<div class="md:h-screen md:flex md:flex-col">
	<Header />

	<div class="mt-xl md:flex-grow pl-md pr-md md:pr-0 flex flex-col md:flex-row gap-xl">
		<div class="md:max-w-[405px] shrink-0">
			<h1 class="uppercase tracking-wide">{data.title}</h1>

			<br />

			<p>
				{@html data.description}
			</p>
		</div>

		<div
			class="relative w-full h-[70vh] md:w-full md:h-full md:max-h-full overflow-hidden"
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

	<Footer />
</div>
