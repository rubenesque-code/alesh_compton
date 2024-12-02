<script lang="ts" context="module">
	import '../app.css';

	import { pageLayoutValuesStore, updatePageLayoutValue, type PageLayoutValues } from '$lib/stores';
	import { Header, Footer } from '^sections';
</script>

<script lang="ts">
	let headerNode: HTMLDivElement;

	$: {
		if (headerNode) {
			updatePageLayoutValue.headerHeight(headerNode.getBoundingClientRect().height);
		}
	}

	let screenHeight: number;
	let screenWidth: number;

	let pageLayoutValues: PageLayoutValues;

	pageLayoutValuesStore.subscribe((store) => {
		pageLayoutValues = store;
	});

	let bodyHeight: number;

	$: {
		if (screenHeight && pageLayoutValues.headerHeight) {
			bodyHeight = screenHeight - pageLayoutValues.headerHeight;
		}
	}

	let scrollY = 0;

	const onScroll = (scrollTop: number) => {
		updatePageLayoutValue.scrollTopPrevious(pageLayoutValues.scrollTopCurrent);

		updatePageLayoutValue.scrollTopCurrent(scrollTop);
	};

	$: onScroll(scrollY);

	$: scrollDirection =
		!pageLayoutValues.scrollTopPrevious ||
		pageLayoutValues.scrollTopPrevious < pageLayoutValues.scrollTopCurrent
			? 'down'
			: 'up';

	$: hideHeader =
		screenWidth &&
		pageLayoutValues.headerHeight &&
		screenWidth <= 768 &&
		scrollDirection === 'down' &&
		pageLayoutValues.scrollTopCurrent >
			(pageLayoutValues.headerHeight ? pageLayoutValues.headerHeight * 3 : 100);
</script>

<svelte:head>
	<title>Alesh Compton</title>

	<meta name="description" content="Alesh Compton's Art Portfolio and Clothes Shop" />
</svelte:head>

<svelte:window bind:innerHeight={screenHeight} bind:innerWidth={screenWidth} bind:scrollY />

<div
	class="fixed left-0 top-0 z-30 w-full transition-transform duration-300 ease-in-out"
	style:transform={hideHeader && pageLayoutValues.headerHeight
		? `translateY(-${pageLayoutValues.headerHeight}px)`
		: ''}
	bind:this={headerNode}
>
	<Header />
</div>

{#if screenHeight && screenWidth && bodyHeight && pageLayoutValues.headerHeight}
	<div
		class="flex flex-col"
		style:height={`${screenWidth >= 768 ? `${bodyHeight}px` : 'auto'}`}
		style:margin-top="{pageLayoutValues.headerHeight}px"
	>
		<div class="flex-grow">
			<slot />
		</div>

		<Footer />
	</div>
{/if}
