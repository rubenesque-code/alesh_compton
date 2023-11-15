<script lang="ts" context="module">
	import type { PortfolioData } from '^data/portfolio';
	import { Header, Footer } from '^sections';
	import { images } from '$lib/assets/images';
	import { Image } from '$lib/components';
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
					{#each data.media as media}
						{#if media.type === 'image'}
							<div
								class="shrink-0"
								style:height="{media.image.img.h}px"
								style:max-height="{imageContainerHeight - 20}px"
								style:aspect-ratio={media.image.img.w / media.image.img.h}
							>
								<Image meta={media.image} imageClass="h-full w-full" />
							</div>
						{:else}
							<div
								class="shrink-0 relative"
								style:height="{media.image.img.h}px"
								style:max-height="{imageContainerHeight - 20}px"
								style:aspect-ratio={16 / 9}
							>
								<Image meta={media.image} imageClass="absolute h-full w-full" />

								<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px]">
									<Image meta={images.icon.youtube} imageClass="h-full w-full" />
								</div>
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<Footer />
</div>
