<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import Event from './Event.svelte';

	const events = [
		{ title: 'Event 1' },
		{ title: 'Event 2' },
		{ title: 'Event 3' },
		{ title: 'Event 4' },
		{ title: 'Event 5' },
		{ title: 'Event 6' },
		{ title: 'Event 7' }
	];
</script>

<section class={'upcomingEvents'}>
	<h3>UPCOMING EVENTS</h3>

	<Carousel.Root
		plugins={[
			Autoplay({
				delay: 3000
			})
		]}
	>
		<Carousel.Content>
			{#each events as event, i}
				<Carousel.Item class="sm:basis-1/2 md:basis-1/2 xl:basis-1/3">
					<Event title={event.title} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</section>

<style lang="scss">
	.upcomingEvents {
		padding: 1rem;
		background-color: var(--background-dark);
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

		h3 {
			font-size: 1.5rem;
			font-weight: 900;
			margin-bottom: 1rem;
		}
	}
</style>
