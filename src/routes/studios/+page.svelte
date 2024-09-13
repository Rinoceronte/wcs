<script lang="ts">
	import Studio from '../../components/Studio.svelte';
	import HeaderText from '../../components/HeaderText.svelte';
	import type { Studio as StudioModel } from '../../lib/types';
	import { onMount } from 'svelte';

	let studios: StudioModel[] = [];

	async function fetchStudios() {
		const res = await fetch('/api/studios');
		studios = await res.json();
	}

	onMount(fetchStudios);
</script>

<section id="studios-page">
	<span class="studio-header">
		<h2>
			<HeaderText headerText1="WEST COAST" />
			<HeaderText headerText1="SWING" headerText2="STUDIOS" />
		</h2>
		<p class={'text-regular'}>
			Explore some of the best studios offering West Coast Swing classes and events.
		</p>
	</span>

	<div class="studio-list">
		{#each studios as { name, address, website, phone }}
			<Studio
				{name}
				address={`${address.street}${address.street2 ? ', ' + address.street2 : ''}, ${address.city}, ${address.state} ${address.zip}`}
				{website}
				,
				{phone}
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	#studios-page {
		display: grid;
		gap: 2rem;
		max-width: 800px;
		margin: 0 auto;
		padding: 40px 20px;

		.studio-header {
			display: grid;
			gap: 1rem;

			h2,
			p {
				text-align: center;
			}
		}

		.studio-list {
			display: flex;
			flex-direction: column;
			gap: 1.5rem;
		}
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		#studios-page {
			padding: 1rem;
		}
	}
</style>
