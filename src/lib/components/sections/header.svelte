<script lang="ts" context="module">
	import { Image } from '$lib/components';
	import { images } from '$lib/assets/images';

	import { Large as MenuLarge, Small as MenuSmall } from './menu';
</script>

<script lang="ts">
	let headerHeight: number;
</script>

<header
	class="shrink-0 flex justify-between gap-1.5xl items-start px-md py-md bg-white"
	bind:clientHeight={headerHeight}
>
	<div class="flex items-center gap-xs/sm shrink-0">
		<Image meta={images.logo} imageClass="w-[30px]" />

		<a class="uppercase tracking-wide" href="/">Alesh Compton</a>
	</div>

	<div class="hidden md/lg:block">
		<MenuLarge />
	</div>

	<div class="md/lg:hidden">
		<MenuSmall bind:headerHeight />
	</div>
</header>
