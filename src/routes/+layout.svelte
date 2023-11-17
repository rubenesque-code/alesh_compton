<script lang="ts" context="module">
	import '../app.css';

	import { Image } from '$lib/components';
	import { images } from '$lib/assets/images';
</script>

<svelte:head>
	<title>Alesh Compton</title>
	<meta name="description" content="Alesh Compton's Art Portfolio and Clothes Shop" />
</svelte:head>

<div class="fixed left-md top-md">
	<Image meta={images.logo} imageClass="w-[30px]" />
</div>

<slot />
