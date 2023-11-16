<script lang="ts">
	let transformStatus: 'idle' | 'opening' | 'open' | 'closing' = 'idle';
</script>

<div class="h-screen grid place-items-center">
	<div>
		<button
			on:click={() => {
				if (transformStatus === 'idle') {
					transformStatus = 'opening';

					setTimeout(() => {
						if (transformStatus === 'opening') {
							transformStatus = 'open';
						}
					}, 1000);
				} else {
					transformStatus = 'closing';

					setTimeout(() => {
						if (transformStatus === 'closing') {
							transformStatus = 'idle';
						}
					}, 1000);
				}
			}}>Click</button
		>

		<div class="mt-xl">
			{#if transformStatus === 'idle' || transformStatus === 'closing'}
				<div>HELLO</div>
			{:else}
				<div>OKAY</div>
			{/if}
		</div>

		<div class="mt-xl">{transformStatus}</div>
		<button class="mt-sm" on:click={() => console.log('transformStatus:', transformStatus)}
			>Print status</button
		>
	</div>
</div>
