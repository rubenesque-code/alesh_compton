<script lang="ts" context="module">
	import { onMount } from 'svelte';

	import { images } from '^assets/images';
	import { storeVideoStore, type StoreVideoState, updateStoreVideo } from '^stores';

	import { Image } from '^components';
	import { Clothes } from '^components/+pages/store';
</script>

<script lang="ts">
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
</script>

<Image meta={images.shop.chain} />

<div class="pb-xl">
	<div class="grid place-items-center p-md">
		<div class="aspect-video w-full max-w-[1200px] bg-gray-100">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video
				width="100%"
				height="100%"
				muted
				loop
				bind:paused
				on:click={updateStoreVideo.togglePause}
			>
				<source src="/videos/treadmill-optimised_30.webm" type="video/webm" />
			</video>
		</div>

		<a class="uppercase mt-md" href="/store/info">Info</a>
	</div>

	<Image meta={images.shop.chain} />

	<Clothes />

	<Image meta={images.shop.chain} />
</div>
