<script lang="ts" context="module">
	import { ArrowFatLeft } from 'phosphor-svelte';
</script>

<div class="px-md pb-xl">
	<a class="flex items-center gap-xs uppercase tracking-wide" href="/">
		<span class="text-2xl"><ArrowFatLeft weight="fill" /></span>
		<span>Store</span>
	</a>

	<slot />
</div>
