<script lang="ts" context="module">
	import { contact } from '^data';

	import { updatePageLayoutValue } from '$lib/stores';
</script>

<script lang="ts">
	let footerNode: HTMLElement;

	$: {
		if (footerNode) {
			updatePageLayoutValue.footerHeight(footerNode.getBoundingClientRect().height);
		}
	}
</script>

<footer class="shrink-0 flex gap-lg px-md py-md" bind:this={footerNode}>
	<a href={`mailto:${contact.email}`}>{contact.email}</a>
	<a href={contact.instagram.href}>{contact.instagram.label}</a>
</footer>
