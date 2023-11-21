<script lang="ts" context="module">
	import { cloths } from '^data/shop';

	import { ShopItemLayout } from '^components/layouts';
</script>

<script lang="ts">
	const data = cloths.find((cloth) => cloth.id === 'polo-xs')!;
</script>

<ShopItemLayout {data} />
