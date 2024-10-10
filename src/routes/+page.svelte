<script lang="ts" context="module">
	import { portfolio } from '^data';

	import { PageContent } from '^pages/portfolio';

	const jsonld = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',

		name: 'Home',

		breadcrumb: {
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Home',
					item: 'https://aleshcompton.com/'
				}
			]
		}
	};

	const jsonldStr = JSON.stringify(jsonld);

	let jsonldScript = `<script type="application/ld+json">${jsonldStr + '<'}/script>`;
</script>

<svelte:head>
	{@html jsonldScript}
</svelte:head>

<PageContent data={portfolio.squatumentary} />
