<script lang="ts">
	export let name: string = '';
	export let address: string = '';
	export let website: string = '';
	export let phone: string = '';
</script>

<article class="studio">
	<span>
		<h5>{name}</h5>
		<p class={'text-regular'}>{address}</p>
		<p class={'text-regular'}>{phone}</p>
	</span>
	<button class={'secondary'}
		><a href={website} target="_blank" rel="noopener noreferrer">Visit Website</a></button
	>
</article>

<style lang="scss">
	.studio {
		padding: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--neutral-dark);

		span {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}

	@media (max-width: 768px) {
		.studio {
			padding: 1rem;
			flex-direction: column;
			gap: 0.5rem;
			align-items: flex-start;
		}
	}
</style>
