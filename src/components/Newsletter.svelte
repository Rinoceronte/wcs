<script lang="ts">
	import HeaderText from './HeaderText.svelte';

	let email = '';
	let signupSuccessful = false;
	let errorMessage = '';

	async function handleSignup() {
		try {
			const response = await fetch('/api/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, subscribed: true })
			});

			if (response.ok) {
				signupSuccessful = true;
				errorMessage = '';
			} else {
				const errorData = await response.json();
				errorMessage = errorData.message || 'Failed to sign up';
			}
		} catch (error) {
			errorMessage = 'An error occurred. Please try again later.';
		}
	}
</script>

<section class="newsletter">
	<div class="join-cta">
		<h3>
			<HeaderText headerText1="JOIN OUR" headerText2="NEWSLETTER" />
		</h3>
		<p>
			Stay updated with the latest West Coast Swing events, workshops, and news! Sign up for our
			newsletter and never miss out.
		</p>
	</div>
	{#if signupSuccessful}
		<div class="join-success-message">
			<h2>Thank you for signing up!</h2>
			<p>
				You’ve successfully subscribed to our newsletter. Keep an eye on your inbox for upcoming
				events and news.
			</p>
		</div>
	{:else}
		<form class="join-form" on:submit|preventDefault={handleSignup}>
			<input type="email" id="email" bind:value={email} placeholder="Enter your email" required />

			<button type="submit" class="btn primary">SIGN UP</button>
		</form>
		{#if errorMessage}
			<p class="text-regular error-message">{errorMessage}</p>
		{/if}
	{/if}
</section>

<style lang="scss">
	.newsletter {
		display: grid;
		background: url('/src/assets/images/Newsletter.jpg') no-repeat center center/cover;
		grid-template-columns: repeat(2, 1fr);
		padding: 3rem 2rem;
		.join-cta {
			display: flex;
			gap: 1.5rem;
			flex-direction: column;

			font-weight: 900;

			p {
				color: var(--primary-text);
			}
		}

		.join-form {
			width: 100%;
			display: flex;
			align-items: center;
			gap: 1rem;

			input {
				width: 100%;
				max-width: 100%;
			}

			button {
				width: fit-content;
				min-width: fit-content;
			}
		}
	}

	@media (max-width: 768px) {
		.newsletter {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(2, auto);
			padding: 2rem 1rem;

			gap: 1rem;

			.join-cta {
				h3 {
					display: flex;
					flex-direction: column;
				}
			}

			.join-form {
				flex-direction: column;
				gap: 1rem;

				input {
					width: 100%;
				}

				button {
					width: 100%;
				}
			}
		}
	}
</style>
