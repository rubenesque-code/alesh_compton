<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { storeVideoStore, updateStoreVideo, type StoreVideoState } from '^stores';

	import { Chains } from '^components';
	import { Clothes } from '^components/+pages/landing';
</script>

<script lang="ts">
	let windowWidth: number | undefined = undefined;

	let storeVideo: StoreVideoState;

	storeVideoStore.subscribe((store) => {
		storeVideo = store;
	});

	$: paused = storeVideo.paused;

	onMount(() => {
		// below is a workaround for autoplay not working with bind:paused.
		// if paused=true on payge mount, need to pause then unpause.
		if (!storeVideo.paused) {
			setTimeout(() => {
				updateStoreVideo.togglePause();
			}, 50);
			setTimeout(() => {
				updateStoreVideo.togglePause();
			}, 50);
			return;
		}

		setTimeout(() => {
			updateStoreVideo.togglePause();
		}, 50);
	});

	$: src = !windowWidth
		? null
		: windowWidth <= 768
		? '/videos/treadmill-optimised_35_lib264.mp4'
		: '/videos/treadmill-optimised_27_lib264.mp4';
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Chains />

<div class="pb-xl">
	<div class="grid place-items-center p-md">
		<div class="aspect-video w-full max-w-[1200px] bg-gray-100">
			{#if src}
				<!-- svelte-ignore a11y-media-has-caption -->
				<video
					width="100%"
					height="100%"
					muted
					loop
					bind:paused
					on:click={updateStoreVideo.togglePause}
				>
					<source {src} type="video/webm" />
				</video>
			{/if}
		</div>

		<a class="uppercase mt-md" href="/store/info">Info</a>
	</div>

	<Chains />

	<Clothes />

	<Chains />
</div>
