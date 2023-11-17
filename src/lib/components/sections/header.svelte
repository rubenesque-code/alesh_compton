<script lang="ts" context="module">
	import { Image } from '$lib/components';
	import { images } from '$lib/assets/images';

	import { Small as MenuSmall, Large as MenuLarge } from './menu';
</script>

<script lang="ts">
	let headerHeight: number;
</script>

<header
	class="shrink-0 flex justify-between gap-1.5xl items-center px-md py-md"
	bind:clientHeight={headerHeight}
>
	<div class="flex items-center gap-xs/sm shrink-0">
		<Image meta={images.logo} imageClass="w-[30px]" />

		<a class="uppercase tracking-wide" href="/">Alesh Compton</a>
	</div>

	<div class="hidden sm:block">
		<MenuLarge />
	</div>

	<div class="sm:hidden">
		<MenuSmall bind:headerHeight />
	</div>
</header>
