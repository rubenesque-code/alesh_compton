<script lang="ts" context="module">
	import { cloths, type Cloth } from '^data/shop';

	import { Image } from '^components';

	const paddingSize = 32;
	const gapSize = 60;
</script>

<script lang="ts">
	let windowWidth: number;
	let containerWidth: number;

	let itemsPerRow: number;
	let totalItemsWidthPerRow: number;

	let itemRows: Cloth[][];
	let itemRowsWidths: number[][];

	$: {
		if (windowWidth && containerWidth) {
			itemsPerRow = windowWidth <= 768 ? 2 : windowWidth < 1200 ? 3 : 4;

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

				// const isLastRow = i === itemRows.length - 1;

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

<div class="flex justify-center">
	<div
		class="flex flex-col w-full max-w-[2400px]"
		style:padding="{paddingSize}px"
		style:gap="{gapSize}px"
		bind:clientWidth={containerWidth}
	>
		{#if itemRows && itemRowsWidths}
			{#each itemRows as row, i}
				<div class="flex justify-between flex-wrap">
					{#each row as item, j}
						{@const applyLastItemWorkaround =
							(itemsPerRow === 2 || itemsPerRow === 4) && i === itemRows.length - 1}
						<a
							style:width="{(itemRowsWidths[i][j] - 2) * (!applyLastItemWorkaround ? 1 : 0.65)}px"
							href={`/store/${item.id}`}
						>
							<div
								class="bg-gray-100"
								style:aspect-ratio={item.shopImage.img.w / item.shopImage.img.h}
							>
								<Image meta={item.shopImage} />
							</div>

							<div class="flex flex-wrap gap-x-sm gap-y-xxs justify-center mt-lg">
								<p>£{item.price}</p>
								<p class="whitespace-nowrap">({item.size})</p>
							</div>
						</a>
					{/each}
				</div>
			{/each}
		{/if}
	</div>
</div>
