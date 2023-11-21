<script lang="ts" context="module">
	import { page } from '$app/stores';
	import { cloths } from '^data/shop';

	import { ShopItemLayout } from '^components/layouts';
</script>

<script lang="ts">
	let slug: string;

	page.subscribe((store) => {
		console.log('store:', store);
		slug = store.params.slug;
	});

	$: data = cloths.find((cloth) => cloth.id === slug);
</script>

{#if data}
	<ShopItemLayout {data} />
{/if}
