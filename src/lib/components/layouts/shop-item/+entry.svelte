<script lang="ts" context="module">
	import { ArrowFatLeft } from 'phosphor-svelte';

	import { pageLayoutValuesStore, type PageLayoutValues } from '$lib/stores';

	import type { Cloth } from '^data/shop';
	import { images } from '^assets/images';

	import { Image } from '^components';
	import InteractiveImage from './image.svelte';
</script>

<script lang="ts">
	export let data: Cloth;

	let screenHeight: number;

	let pageLayoutValues: PageLayoutValues;

	pageLayoutValuesStore.subscribe((store) => {
		pageLayoutValues = store;
	});

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

<svelte:window bind:innerHeight={screenHeight} />

{#if screenHeight && pageLayoutValues.headerHeight && pageLayoutValues.footerHeight}
	<div
		class="px-xl pt-md"
		style:min-height="{screenHeight -
			pageLayoutValues.headerHeight -
			pageLayoutValues.footerHeight}px"
	>
		<a class="flex items-center gap-xs uppercase tracking-wide" href="/store">
			<span class="text-2xl"><ArrowFatLeft weight="fill" /></span>
			<span class="text-lg">Store</span>
		</a>

		<div class="w-[300px] mt-lg">
			<Image meta={data.heading} />
		</div>

		<div class="mt-lg">
			<p class="text-lg">{data.description[0]}</p>
		</div>

		<div class="mt-md flex gap-lg" bind:clientHeight={imageContainerHeight}>
			<div class="shrink-0 flex flex-col items-start gap-md">
				{#each data.description.filter((_line, i) => i > 0) as line}
					<p class="text-lg">{line}</p>
				{/each}

				<p class="text-lg">SIZE - {data.size}</p>

				<p class="text-lg">£{data.price}</p>

				<button class="text-lg w-[100px]">
					<Image meta={images.shop.buy_button} />
				</button>
			</div>

			{#if imageContainerHeight}
				<div class="flex-grow overflow-auto pb-lg" bind:this={imageScrollNode}>
					<div class="flex gap-md">
						{#each data.pageImages as image, i}
							<InteractiveImage
								data={image}
								id={`image-${i}`}
								loading={i === 0 ? 'eager' : 'lazy'}
							/>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
