<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
</script>

<script lang="ts">
	onMount(() => {
		goto('/');
	});
</script>
