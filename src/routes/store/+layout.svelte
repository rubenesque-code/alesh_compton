<script lang="ts" context="module">
	import { pageLayoutValuesStore, type PageLayoutValues } from '$lib/stores';
</script>

<script lang="ts">
	let screenHeight: number;

	let pageLayoutValues: PageLayoutValues;

	pageLayoutValuesStore.subscribe((store) => {
		pageLayoutValues = store;
	});
</script>

<svelte:window bind:innerHeight={screenHeight} />

{#if screenHeight && pageLayoutValues.headerHeight && pageLayoutValues.footerHeight}
	<div
		class="px-md md:px-xl pt-md pb-xl"
		style:min-height="{screenHeight -
			pageLayoutValues.headerHeight -
			pageLayoutValues.footerHeight}px"
	>
		<slot />
	</div>
{/if}
