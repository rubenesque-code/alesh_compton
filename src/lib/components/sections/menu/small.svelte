<script lang="ts" context="module">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import {
		swipe as untypedSwipe,
		type ParametersSwitch,
		type SwipeParameters
	} from 'svelte-gestures';
	import type { Action } from 'svelte/action';
	import { PaperPlaneRight, InstagramLogo } from 'phosphor-svelte';

	import { contact } from '^data';

	import PageLinks from './page-links.svelte';

	const swipe: Action<
		HTMLElement,
		ParametersSwitch<SwipeParameters>,
		{
			'on:swipe': (
				e: CustomEvent<{
					[x: string]: string;
					// detail: { direction: 'left' | 'right' };
				}>
			) => void;
		}
	> = untypedSwipe as any;
</script>

<script lang="ts">
	export let headerHeight: number;

	let screenHeight: number;

	let show = false;

	let documentNode: Document;

	onMount(() => {
		documentNode = document;
	});

	$: {
		if (documentNode) {
			if (show) {
				documentNode.body.style.overflow = 'hidden';
				documentNode.body.style.userSelect = 'none';
			} else {
				documentNode.body.style.overflow = 'auto';
				documentNode.body.style.userSelect = 'atuo';
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
		use:swipe={{ timeframe: 300, minSwipeDistance: 70, touchAction: 'pan-y' }}
		on:swipe={(e) => {
			if (e.detail.direction === 'right') {
				show = false;
			}
		}}
	>
		<div class="flex flex-col items-center gap-md"><PageLinks /></div>

		<div class="mt-xl flex flex-col items-center gap-md">
			<div class="flex flex-col items-center gap-xxs">
				<div>
					<PaperPlaneRight />
				</div>
				<a href={`mailto:${contact.email}`}>{contact.email}</a>
			</div>

			<div class="flex flex-col items-center gap-xxs">
				<div>
					<InstagramLogo />
				</div>
				<a href={contact.instagram.href}>{contact.instagram.label}</a>
			</div>
		</div>
	</div>
{/if}

<style>
	button {
		@apply uppercase tracking-wider;
	}

	a {
		@apply uppercase tracking-wide;
	}
</style>
