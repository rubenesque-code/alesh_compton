<script lang="ts" context="module">
	import { ArrowFatLeft } from 'phosphor-svelte';
</script>

<div class="px-md">
	<a class="flex items-center gap-xs uppercase tracking-wide" href="/store">
		<span class="text-2xl"><ArrowFatLeft weight="fill" /></span>
		<span>Store</span>
	</a>

	<slot />
</div>
