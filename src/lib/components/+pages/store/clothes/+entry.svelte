<script lang="ts" context="module">
	import { cloths, type Cloth } from '^data/shop';

	import { Image } from '^components';

	const gapSize = 80;
	const paddingSize = 32;
</script>

<script lang="ts">
	let windowWidth: number;
	let containerWidth: number;

	let itemsPerRow: number;
	let totalItemsWidthPerRow: number;

	let itemRows: Cloth[][];
	let itemRowsWidths: number[][];

	$: console.log('itemRowsWidths:', itemRowsWidths);

	$: {
		if (windowWidth && containerWidth) {
			itemsPerRow = windowWidth <= 768 ? 2 : 4;

			const numGaps = itemsPerRow - 1;
			const totalGapWidth = numGaps * gapSize;

			totalItemsWidthPerRow = containerWidth - paddingSize * 2 - totalGapWidth;

			let itemRowsTemp: Cloth[][] = [];

			for (let i = 0; i < cloths.length; i += itemsPerRow) {
				const itemRow = cloths.slice(i, i + itemsPerRow);

				itemRowsTemp.push(itemRow);
			}

			itemRows = itemRowsTemp;
		}
	}

	$: {
		if (itemRows && totalItemsWidthPerRow) {
			const itemRowsWidthsTemp: number[][] = [];

			for (let i = 0; i < itemRows.length; i++) {
				const itemRow = itemRows[i];

				const totalItemsWidthForRow = (totalItemsWidthPerRow * itemRow.length) / itemsPerRow;

				const aspectRatios = itemRow.map((cloth) => {
					const image = cloth.shopImage.img;

					return image.w / image.h;
				});

				let aspectRatioTotal = 0;

				aspectRatios.forEach((val) => {
					aspectRatioTotal += val;
				});

				const relativeWidths = aspectRatios.map((ar) => ar / aspectRatioTotal);

				const widths = relativeWidths.map((rw) => totalItemsWidthForRow * rw);

				itemRowsWidthsTemp.push(widths);
			}

			itemRowsWidths = itemRowsWidthsTemp;
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
	class="flex flex-col"
	style:padding="{paddingSize}px"
	style:gap="{gapSize}px"
	bind:clientWidth={containerWidth}
>
	{#if itemRows && itemRowsWidths}
		{#each itemRows as row, i}
			<div class="flex flex-wrap" style:gap="{gapSize}px">
				{#each row as item, j}
					<div style:width="{itemRowsWidths[i][j]}px">
						<Image meta={item.shopImage} imageClass="" />
					</div>
				{/each}
			</div>
		{/each}
	{/if}
</div>
