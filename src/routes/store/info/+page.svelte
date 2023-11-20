<script lang="ts" context="module">
	import { contact } from '^data';
</script>

<h1 class="mt-xl text-4xl tracking-wide">FAQ</h1>

<div class="flex flex-col gap-y-lg md:flex-row md:justify-between mt-xl pb-xl border-b-4">
	<div class="flex flex-col gap-xs italic">
		<p>1. Do you ship internationally?</p>
		<p>2. How should I wash these clothes?</p>
		<p>3. What is the return policy?</p>
		<p>4. Can you make me custom clothes?</p>
		<p>5. When do you restock a certain item?</p>
		<p>6. Can I try your garments?</p>
	</div>

	<div class="flex flex-col gap-sm">
		<p class="flex gap-xs">
			<span>1.</span>
			<span class="max-w-[400px] pb-sm border-b-2 leading-relaxed">
				Yes, everywhere. Please <a class="underline" href="/store/info/terms">read this</a> for more
				information regarding shipping.
			</span>
		</p>
		<p class="flex gap-xs">
			<span>2.</span>
			<span class="max-w-[400px] pb-sm border-b-2 leading-relaxed">
				- Wash item on cold.<br />
				- Make sure item is inside out.<br />
				- Hang dry or air dry.<br />
				- Do not use dryer. Do not dry clean.
			</span>
		</p>
		<p class="flex gap-xs">
			<span>3.</span>
			<span class="max-w-[400px] pb-sm border-b-2 leading-relaxed">
				Please check <a class="underline" href="/store/info/returns">return policy here</a>.</span
			>
		</p>
		<p class="flex gap-xs">
			<span>4.</span>
			<span class="max-w-[400px] pb-sm border-b-2 leading-relaxed">
				I don't do this regularly but welcome proposals. Please write an email to <a
					href={`mailto:${contact.email}`}>{contact.email}</a
				>.
			</span>
		</p>
		<p class="flex gap-xs">
			<span>5.</span>
			<span class="max-w-[400px] pb-sm border-b-2 leading-relaxed">
				I rarely restock products as each item is unique and cannot be reproduced. However, if
				you're after a specific item you can send a request by sending an email to <a
					href={`mailto:${contact.email}`}>{contact.email}</a
				>.
			</span>
		</p>
		<p class="flex gap-xs">
			<span>6.</span>
			<span class="max-w-[400px] leading-relaxed">
				If you're based in London you can come to my studio for fittings. Email <a
					href={`mailto:${contact.email}`}>{contact.email}</a
				> to arrange timings. I'm based in Bermondsey.
			</span>
		</p>
	</div>
</div>

<div class="mt-md">
	<h3 class="text-2xl tracking-wide text-gray-500">Concerning Stylist Pulls</h3>
	<p class="mt-xs leading-relaxed">
		If you are interested in pulling clothes on a set or shoot, please visit <a
			class="underline"
			href="/store/info/stylists">this page</a
		>.
	</p>
</div>
