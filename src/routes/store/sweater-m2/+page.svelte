<script lang="ts" context="module">
	import { cloths } from '^data/shop';

	import { ShopItemLayout } from '^components/layouts';
</script>

<script lang="ts">
	const data = cloths.find((cloth) => cloth.id === 'sweater-m2')!;
</script>

<ShopItemLayout {data} />
