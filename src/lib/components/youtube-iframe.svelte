<script lang="ts" context="module">
	import { domain } from '^data';
	import { getYouTubeEmbedUrl } from '^helpers';
</script>

<script lang="ts">
	export let url: string;

	const params = `?enablejsapi=1&modestbranding=1&rel=0&color=white&frameborder=0&origin=${
		import.meta.env.PROD ? domain : ''
	}`;

	const src = getYouTubeEmbedUrl(url);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<iframe class="w-full h-full" src={src + params} loading="lazy" allowfullscreen></iframe>
