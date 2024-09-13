<script lang="ts">
	import HeaderText from '../../components/HeaderText.svelte';
	let name = '';
	let email = '';
	let message = '';
	let formSubmitted = false;

	function handleSubmit() {
		// Handle the form submission logic (send an email or API call)
		formSubmitted = true;
	}
</script>

<section class="contact-page">
	<div class="leftContent">
		<h2><HeaderText headerText1="Contact Us" /></h2>
		<p class="text-regular">
			We'd love to hear from you! Whether you have questions about events, the site, or anything
			related to West Coast Swing, feel free to get in touch.
		</p>

		{#if formSubmitted}
			<div class="thank-you-message">
				<h2>Thank you for reaching out!</h2>
				<p>We have received your message and will get back to you as soon as possible.</p>
			</div>
		{:else}
			<form on:submit|preventDefault={handleSubmit}>
				<div class="form-group">
					<label for="name">Name</label>
					<input type="text" id="name" bind:value={name} placeholder="Your name" required />
				</div>

				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" bind:value={email} placeholder="Your email" required />
				</div>

				<div class="form-group">
					<label for="message">Message</label>
					<textarea id="message" bind:value={message} placeholder="Your message" required
					></textarea>
				</div>

				<button type="submit" class="btn primary">Submit</button>
			</form>
		{/if}
	</div>
	<img class="rightContent" src="/src/assets/images/placeholder-image.jpg" alt="Contact Us" />
</section>

<style lang="scss">
	.contact-page {
		margin: 0 auto;
		width: fit-content;
		padding: 2rem 1rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		place-items: center;
		gap: 2rem;

		.leftContent {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			form {
				display: flex;
				flex-direction: column;
				gap: 1rem;

				input {
					border: 1px solid var(--primary-text);
				}

				textarea {
					height: 10rem;
					background-color: var(--background-dark);
					border: 1px solid var(--primary-text);
				}

				button.primary {
					width: fit-content;
				}
			}

			.form-group {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}
		}
	}

	@media (max-width: 768px) {
		.contact-page {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>
