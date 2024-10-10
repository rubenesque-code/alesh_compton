<script lang="ts" context="module">
	import { fade } from 'svelte/transition';
</script>

<script lang="ts">
	let videoMenuIsOpen = false;
</script>

<div class="flex justify-between items-center">
	<div class="flex flex-wrap justify-end items-center gap-x-md gap-y-sm">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="relative"
			on:mouseenter={() => (videoMenuIsOpen = true)}
			on:mouseleave={() => (videoMenuIsOpen = false)}
		>
			<p class="md:text-[14px] top-label">video</p>

			{#if videoMenuIsOpen}
				<div
					class="p-4 bg-white z-10 absolute flex gap-sm flex-col right-0 bottom-0 border translate-y-full border-black"
					transition:fade
				>
					<a class="md:text-[13px] whitespace-nowrap" href="/">Squatumentary</a>

					<!-- <a class="md:text-[13px]" href="/peoples-recovery-project">People's Recovery Project</a> -->

					<a class="md:text-[13px] whitespace-nowrap" href="/estat-du-france">estat du france</a>

					<a class="md:text-[13px] uppercase whitespace-nowrap" href="/brexit">brexit</a>

					<a class="md:text-[13px] uppercase whitespace-nowrap" href="/painters-touch"
						>painters touch</a
					>

					<a class="md:text-[13px] uppercase whitespace-nowrap" href="/various-video"
						>various video</a
					>
				</div>
			{/if}
		</div>
		<a class="md:text-[14px] top-label" href="/paintings">Paintings</a>
		<!-- <a class="md:text-[14px]" href="/painters-touch">painters touch</a> -->
		<a class="md:text-[14px] top-label" href="/television-god">television god</a>
		<!-- <a class="md:text-[14px]" href="/various-video">various video</a> -->

		<div class="h-[13px] w-[1.5px] bg-gray-600" />

		<a class="md:text-[14px] top-label" href="/store">store</a>
	</div>
</div>

<style>
	.top-label {
		@apply uppercase tracking-wide;
	}
</style>
