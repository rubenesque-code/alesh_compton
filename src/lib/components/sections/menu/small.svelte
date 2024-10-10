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

	import { navigating } from '$app/stores';

	import { contact } from '^data';

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

	let showMenu = false;

	let documentNode: Document;

	onMount(() => {
		documentNode = document;
	});

	$: {
		if (documentNode) {
			if (showMenu) {
				documentNode.body.style.overflow = 'hidden';
				documentNode.body.style.userSelect = 'none';
			} else {
				documentNode.body.style.overflow = 'auto';
				documentNode.body.style.userSelect = 'atuo';
			}
		}
	}

	$: {
		if ($navigating) {
			showMenu = false;
		}
	}
</script>

<svelte:window bind:innerHeight={screenHeight} />

<button class="uppercase" on:click={() => (showMenu = !showMenu)} type="button">Menu</button>

{#if screenHeight && headerHeight && showMenu}
	<div
		class="fixed left-0 w-screen bg-white px-md pt-lg overflow-y-auto"
		style:height="{screenHeight - headerHeight}px"
		style:top="{headerHeight}px"
		transition:fly={{ x: '100%' }}
		use:swipe={{ timeframe: 300, minSwipeDistance: 70, touchAction: 'pan-y' }}
		on:swipe={(e) => {
			if (e.detail.direction === 'right') {
				showMenu = false;
			}
		}}
	>
		<div class="flex flex-col items-center gap-md">
			<div class="relative flex flex-col items-center">
				<h3 class="text-[12px] top-label">video</h3>

				<div class="pl-4 flex gap-sm flex-col items-center mt-4">
					<a class="whitespace-nowrap" href="/">Squatumentary</a>

					<a class="whitespace-nowrap" href="/the-peoples-recovery-project"
						>People's Recovery Project</a
					>

					<a class="whitespace-nowrap" href="/estat-du-france">estat du france</a>

					<a class="whitespace-nowrap" href="/brexit">brexit</a>

					<a class="whitespace-nowrap" href="/painters-touch">painters touch</a>

					<a class="whitespace-nowrap" href="/various-video">various video</a>
				</div>
			</div>

			<div class="h-[13px] w-[1.5px] bg-gray-600" />

			<a class="top-label" href="/paintings">Paintings</a>
			<a class="top-label" href="/television-god">television god</a>

			<div class="h-[13px] w-[1.5px] bg-gray-600" />

			<a class="md:text-[14px] top-label" href="/store">store</a>
		</div>

		<div class="mt-xl mb-lg flex flex-col items-center gap-md">
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

	.top-label {
		@apply uppercase tracking-wide;
	}
</style>
