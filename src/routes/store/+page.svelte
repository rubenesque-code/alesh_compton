<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { storeVideoStore, updateStoreVideo, type StoreVideoState } from '^stores';

	import { Chains } from '^components';
	import { Clothes } from '^components/+pages/landing';

	const jsonld = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',

		name: 'Store',

		breadcrumb: {
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Home',
					item: 'https://aleshcompton.com/'
				},

				{
					'@type': 'ListItem',
					position: 2,
					name: 'Store',
					item: 'https://aleshcompton.com/store'
				}
			]
		}
	};

	const jsonldStr = JSON.stringify(jsonld);

	let jsonldScript = `<script type="application/ld+json">${jsonldStr + '<'}/script>`;
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
		// if paused=true on mount, need to pause then unpause.
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

	$: srcMp4 = !windowWidth
		? null
		: windowWidth <= 768
		? '/videos/treadmill-optimised_35_lib264.mp4'
		: '/videos/treadmill-optimised_27_lib264.mp4';

	$: srcWebm = !windowWidth
		? null
		: windowWidth <= 768
		? '/videos/treadmill-optimised_60.webm'
		: '/videos/treadmill-optimised_30.webm';
</script>

<svelte:head>
	{@html jsonldScript}
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<Chains />

<div class="pb-xl">
	<div class="grid place-items-center p-md">
		<div class="aspect-video w-full max-w-[1400px] bg-gray-100">
			{#if srcMp4}
				<video
					width="100%"
					height="100%"
					muted
					loop
					playsinline
					controls
					autoplay
					poster="/videos/treadmill-poster-resized.jpg"
					bind:paused
					on:click={updateStoreVideo.togglePause}
				>
					<source src={srcMp4} type="video/mp4" />
					<source src={srcWebm} type="video/webm" />
				</video>
			{/if}
		</div>

		<a class="uppercase mt-md" href="/store/info">Info</a>
	</div>

	<Chains />

	<Clothes />

	<Chains />
</div>
