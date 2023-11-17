<script lang="ts" context="module">
	import { Header, Footer } from '^sections';
</script>

<div class="min-h-screen flex flex-col">
	<Header />

	<div class="my-xl flex-grow">
		<slot />
	</div>

	<Footer />
</div>
