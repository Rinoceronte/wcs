<script lang="ts">
	import UpcomingEvents from '../components/UpcomingEvents.svelte';
	import HeaderText from '../components/HeaderText.svelte';
</script>

<div class="home-page">
	<section class="hero">
		<h1><HeaderText headerText1="Find Your Next West Coast Swing Event" /></h1>
		<p class="text-regular">
			Your go-to hub for finding West Coast Swing socials, workshops, and festivals.
		</p>
		<button class="primary"><a href="/calendar" class="btn">View Calendar</a></button>
	</section>

	<UpcomingEvents />

	<section class="about-wcs">
		<h2><HeaderText headerText1="What is West Coast Swing?" /></h2>
		<p class="text-regular">
			West Coast Swing is a partner dance that’s characterized by its smooth, elastic look and
			emphasis on improvisation. It’s danced to a wide variety of music, including pop, blues, and
			jazz.
		</p>
		<button class="secondary"><a href="/about" class="btn">Learn More</a></button>
	</section>
</div>

<style lang="scss">
	.home-page {
		.hero {
			display: grid;
			gap: 1rem;
			padding: 1rem;
			place-items: center;

			/* Set the background image */
			background-image: url('/src/assets/images/hero-image.webp');
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			h1,
			p {
				text-align: center;
			}
		}

		.about-wcs {
			display: grid;
			gap: 1rem;
			padding: 2rem 1rem;
			place-items: center;
			text-align: center;

			h2,
			p {
				text-align: center;
			}
		}
	}
</style>
