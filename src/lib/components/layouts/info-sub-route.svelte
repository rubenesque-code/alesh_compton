<script lang="ts" context="module">
	import { ArrowFatLeft } from 'phosphor-svelte';
</script>

<a class="flex items-center gap-xs uppercase tracking-wide mt-xxs" href="/store/info">
	<span class="text-2xl"><ArrowFatLeft weight="fill" /></span>
	<span>Info</span>
</a>

<div class="flex justify-center">
	<div class="max-w-[768px]">
		<slot />
	</div>
</div>
