<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { browser } from '$app/environment';

	export let headerHeight: number;

	let screenHeight: number;

	let show = true;

	let documentNode: Document;

	onMount(() => {
		documentNode = document;
	});

	$: {
		if (documentNode) {
			if (show) {
				documentNode.body.style.overflow = 'hidden';
			} else {
				documentNode.body.style.overflow = 'auto';
			}
		}
	}
</script>

<svelte:window bind:innerHeight={screenHeight} />

<button class="uppercase" on:click={() => (show = !show)} type="button">Menu</button>

{#if screenHeight && headerHeight && show}
	<div
		class="fixed left-0 w-screen bg-white px-md pt-lg overflow-y-auto"
		style:height="{screenHeight - headerHeight}px"
		style:top="{headerHeight}px"
		transition:fly={{ x: '100%' }}
	>
		<div class="flex flex-col items-center gap-md">
			<a href="/">Squatumentary</a>
			<a href="/paintings">Paintings</a>
			<a href="/brexit">brexit</a>
			<a href="/estat-du-france">estat du france</a>
		</div>

		<div class="mt-xl flex flex-col items-center gap-md">
			<a class="italic" href="mailto:alesh@aleshcompton.com">alesh@aleshcompton.com</a>
			<a class="italic" href="https://www.instagram.com/aleshcompton/">@aleshcompton</a>
		</div>
	</div>
{/if}

<style>
	button {
		@apply uppercase tracking-wider;
	}

	a {
		@apply uppercase;
	}
</style>
