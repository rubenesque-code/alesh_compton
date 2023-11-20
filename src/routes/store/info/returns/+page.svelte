<script lang="ts" context="module">
	import { contact } from '^data';

	import { InfoSubRouteLayout } from '^components/layouts';
</script>

<InfoSubRouteLayout>
	<h1 class="text-center">Returns Policy</h1>

	<p class="mt-1.5xl leading-relaxed">
		If you are in the UK, returns are possible up to two weeks after receiving your items. Returned
		clothing must be in its original packaging and should not have been worn or damaged.
	</p>

	<h4 class="mt-xl font-bold">To begin the return process, please follow the following steps:</h4>
	<p class="mt-xs leading-relaxed">
		- Contact <a href={`mailto:${contact.email}`}>{contact.email}</a> with the order number and name
		associated with the purchase in the email subject line.<br />
		- Attach a photo of the product, along with a brief explanation of the reason for the return.<br
		/>
		- We will respond as soon as possible with the return shipping process.<br />
		- The cost of return shipping is the responsibility of the custome.<br />
		- The refund will be processed once we receive the merchandise, using the payment method that was
		used during the process.
	</p>
</InfoSubRouteLayout>

<style>
	h1 {
		@apply uppercase text-2xl tracking-wide text-gray-500;
	}
</style>
