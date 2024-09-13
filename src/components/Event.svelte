<script lang="ts">
	import Icon from './Icon.svelte';

	export let title = '';
	export let imgSrc = '/src/assets/images/placeholder-image.jpg';
	export let eventDate = 'September 10, 2024';
	export let eventLocation = 'San Francisco, CA';
	export let description =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies aliquam.';
</script>

<section class={'eventCard'}>
	<figure class={'heroImage'}>
		<img src={imgSrc} alt="placeholder" />
		<figcaption><button class={'primary'}>CTA</button></figcaption>
	</figure>
	<div class={'meetingDetails'}>
		<span>
			<Icon name="calendar-alt" size="16" color="#FF0163" />
			<p class={'text-small'}>{eventDate}</p>
		</span>
		<span>
			<Icon name="map" size="16" color="#FF0163" />
			<p class={'text-small'}>{eventLocation}</p>
		</span>
	</div>
	<h5>{title}</h5>
	<p class="text-regular">{description}</p>
	<button class={'ternary'}>more details&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
</section>

<style lang="scss">
	.eventCard {
		width: 416px;
		background-color: var(--neutral-dark);
		padding: 1rem;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 1rem;

		.heroImage {
			width: 100%;
			height: auto;

			position: relative;

			figcaption {
				position: absolute;
				top: 1rem;
				right: 1rem;
			}
		}

		button {
			padding: 0.25rem 0.5rem;
		}

		button.ternary {
			width: fit-content;
			padding-left: 0;
			display: flex;
			gap: 1rem;
		}

		.meetingDetails {
			display: flex;
			gap: 1rem;

			span {
				display: flex;
				gap: 0.5rem;
			}
		}
	}

	@media (max-width: 768px) {
		.eventCard {
			width: 100%;
			height: fit-content;

			.meetingDetails {
				flex-direction: column;
			}
		}
	}
</style>
