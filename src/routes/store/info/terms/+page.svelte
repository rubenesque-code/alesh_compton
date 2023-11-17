<script lang="ts" context="module">
	import { ArrowFatLeft } from 'phosphor-svelte';

	import { contact } from '^data';
</script>

<a class="flex items-center gap-xs uppercase tracking-wide mt-xxs" href="/store/info">
	<span class="text-2xl"><ArrowFatLeft weight="fill" /></span>
	<span>Info</span>
</a>

<h1 class="text-center">Terms & Conditions</h1>

<h2 class="mt-1.5xl">Order Confirmation</h2>
<p class="mt-xs leading-relaxed">
	You will receive an email confirmation of your order, confirming your purchase and details of the
	items you have ordered.
</p>

<h2 class="mt-xl">Payment</h2>
<p class="mt-xs leading-relaxed">
	You can pay with your credit /debit card or Paypal account. All payments are processed through
	Paypal. Your card details are not revealed to us, and are never stored on our server or database.
</p>

<h2 class="mt-xl">Delivery</h2>
<p class="mt-xs leading-relaxed">
	All orders will be posted with tracking. The carrier we choose may vary depending on the size of
	the item and from one item to another. We will inform you of the tracking number and chosen
	courier as soon as the order is processed.
</p>

<h2 class="mt-xl">Return policy</h2>
<p class="mt-xs leading-relaxed">
	If you are in the UK, returns are possible up to two weeks after receiving your items. Returned
	clothing must be in its original packaging and should not have been worn or damaged.
</p>

<h4 class="mt-1.5xl font-bold">To begin the return process, please follow the following steps:</h4>
<p class="mt-xs leading-relaxed">
	- Contact <a href={`mailto:${contact.email}`}>{contact.email}</a> with the order number and name
	associated with the purchase in the email subject line.<br />
	- Attach a photo of the product, along with a brief explanation of the reason for the return.<br
	/>
	- We will respond as soon as possible with the return shipping process.<br />
	- The cost of return shipping is the responsibility of the custome.<br />
	- The refund will be processed once we receive the merchandise, using the payment method that was used
	during the process.
</p>

<style>
	h1,
	h2 {
		@apply uppercase text-2xl tracking-wide text-gray-500;
	}
</style>
