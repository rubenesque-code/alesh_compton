<script lang="ts" context="module">
	import { InfoSubRouteLayout } from '^components/layouts';
	import { contact } from '^data';
</script>

<InfoSubRouteLayout>
	<h1 class="text-center">Stylists</h1>

	<p class="mt-1.5xl leading-relaxed">
		If you are a stylist of photographer and would like to feature one of our pieces in a
		photoshoot, please don't hesitate to send an email to <a href={`mailto:${contact.email}`}
			>{contact.email}</a
		>.
	</p>

	<h4 class="mt-xl">Information to know:</h4>
	<p class="mt-xs leading-relaxed">
		- Following the explanation of your project, we will send you a list of available pieces, as
		well as their retail price.<br />
		- It is possible to create a custom piece specifically for the project upon request. To do so, Please
		send us your requests by email. Allow longer production time for this.<br />
		- Save in exceptional circumstances, we do not lend out clothing for free for the following reasons:
		each piece is hand-dyed and unique, we only have a small stock, the risk of damage or the length
		of the rental period would result in a loss for our business and cannot be exchanged for visibility.<br
		/>
		- Our stock is located in London, and we are available to hand over the pieces in person.<br />
		- For shipments, we are responsive and can send the pieces via UPS Express, delivered the next day
		before 10:30 on weekdays.
	</p>
</InfoSubRouteLayout>

<style>
	h1 {
		@apply uppercase text-2xl tracking-wide text-gray-500;
	}
</style>
