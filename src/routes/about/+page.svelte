<script>
	import HeaderText from '../../components/HeaderText.svelte';
	// No additional JavaScript is necessary for this simple layout
</script>

<section class="about-page">
	<h1><HeaderText headerText1="Our Mission" /></h1>
	<p class="text-regular">
		At [Your Website Name], our mission is to connect the West Coast Swing community by providing a
		centralized platform where dancers can easily find and attend social events, classes, and
		festivals. Whether you're a seasoned dancer or just discovering West Coast Swing, we aim to make
		it easier to stay informed about everything happening in your local scene and beyond. <br /><br
		/>We believe that West Coast Swing fosters a unique sense of community, creativity, and joy. By
		bringing together event organizers, instructors, and dancers, we hope to help this vibrant dance
		community thrive and grow.<br /><br /> Join us as we continue to expand our event listings and resources
		to serve dancers of all levels and regions.
	</p>

	<img src="/src/assets/images/placeholder-image.jpg" alt="Our Mission" />
</section>

<style lang="scss">
	.about-page {
		display: grid;
		gap: 3rem;
		place-items: center;
		max-width: 800px;
		margin: 0 auto;
		padding: 40px 20px;
		text-align: center;

		h1 {
			text-align: center;
		}
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.about-page {
			padding: 20px;
		}
	}
</style>
