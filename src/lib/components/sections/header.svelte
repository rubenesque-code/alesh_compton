<script lang="ts" context="module">
	import { Image } from '$lib/components';
	import { images } from '$lib/assets/images';
</script>

<header class="shrink-0 flex justify-between items-center px-md py-md">
	<div class="flex items-center gap-sm">
		<Image meta={images.logo} imageClass="w-[30px]" />
		<a href="/">Alesh Compton</a>
	</div>

	<div class="flex justify-between items-center">
		<div class="flex items-center gap-sm">
			<a href="/">Squatumentary</a>
			<a href="/paintings">Paintings</a>
		</div>
	</div>
</header>

<style>
	a {
		@apply uppercase;
	}
</style>
