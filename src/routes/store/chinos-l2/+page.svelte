<script lang="ts" context="module">
	import { cloths } from '^data/shop';

	import { PageContent } from '^components/+pages/store/item';
</script>

<script lang="ts">
	const data = cloths.find((cloth) => cloth.id === 'chinos-l2')!;
</script>

<PageContent {data} />
