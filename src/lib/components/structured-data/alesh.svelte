<script lang="ts" context="module">
	const jsonld = {
		'@context': 'https://schema.org',
		'@type': ['Person', 'Artist'],
		name: 'Alesh Compton',
		url: 'https://aleshcompton.com/'
	};
	const jsonldStr = JSON.stringify(jsonld);

	let jsonldScript = `<script type="application/ld+json">${jsonldStr + '<'}/script>`;
</script>

<svelte:head>
	{@html jsonldScript}
</svelte:head>
