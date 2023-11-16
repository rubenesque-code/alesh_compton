<script lang="ts" context="module">
	import type { PortfolioData } from '^data/portfolio';
	import { Header, Footer } from '^sections';
	import { images } from '$lib/assets/images';
	import { Image } from '$lib/components';
	import PortfolioImage from './image.svelte';
	import PortfolioVideo from './video.svelte';
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

	let translate = false;
</script>

<div class="h-screen flex flex-col">
	<Header />

	<div class="flex-grow pl-md flex gap-xl">
		<div class="max-w-[405px] shrink-0">
			<h1 class="uppercase">{data.title}</h1>

			<br />

			<p>
				{@html data.description}
			</p>
		</div>

		<div
			class="relative w-full h-full max-h-full overflow-hidden"
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
							<PortfolioImage data={media.image} id={`image-${i}`} bind:imageContainerHeight />
						{:else}
							<PortfolioVideo
								data={media}
								id={`image-${i}`}
								bind:imagesContainerHeight={imageContainerHeight}
							/>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<Footer />
</div>
