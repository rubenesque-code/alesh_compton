<script lang="ts" context="module">
	import { contact } from '^data';
</script>

<footer class="shrink-0 flex gap-lg px-md py-md">
	<a href={`mailto:${contact.email}`}>{contact.email}</a>
	<a href={contact.instagram.href}>{contact.instagram.label}</a>
</footer>
