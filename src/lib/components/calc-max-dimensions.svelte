<script lang="ts" context="module">
	import { calcMaxDimensions } from '^helpers';
</script>

<script lang="ts">
	export let initial: { width: number; height: number };
	export let transformed: { width: number; height: number };

	let screenWidth: number;
	let screenHeight: number;

	$: {
		if (screenHeight && screenWidth) {
			transformed = calcMaxDimensions({
				transformContainer: { width: screenWidth, height: screenHeight },
				initial: { width: initial.width, height: initial.height }
			});
		}
	}
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />
