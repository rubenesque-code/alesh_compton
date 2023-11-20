<script lang="ts" context="module">
	import { cloths } from '^data/shop';

	import { Image } from '^components';
</script>

<script lang="ts">
	let windowWidth: number;
	let containerWidth: number;

	const gapSize = 40;

	let totalItemsWidth: number;

	$: {
		if (windowWidth && containerWidth) {
			const numGaps = windowWidth <= 768 ? 1 : 3;
			const totalGapWidth = numGaps * gapSize;

			totalItemsWidth = containerWidth - totalGapWidth;
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="grid grid-cols-2 gap-2xl md:grid-cols-4 p-lg" bind:clientWidth={containerWidth}>
	{#each cloths as item}
		<div class="">
			<Image meta={item.shopImage} imageClass="h-full object-cover" />
		</div>
	{/each}
</div>
