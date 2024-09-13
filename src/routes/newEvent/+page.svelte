<script lang="ts">
	import { goto } from '$app/navigation';

	// Form data
	let title = '';
	let start = '';
	let end = '';
	let description = '';
	let allDay = false;
	let isSubmitting = false;

	// Handle form submission
	async function submitEvent() {
		isSubmitting = true;

		// Build the event data
		const eventData = {
			title,
			start,
			end: end || null,
			description,
			allDay
		};

		try {
			// Send POST request to add event
			const response = await fetch('/api/events', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(eventData)
			});

			if (response.ok) {
				// Redirect to the calendar or success page
				goto('/calendar');
			} else {
				const { message } = await response.json();
				alert(`Failed to create event: ${message}`);
			}
		} catch (err) {
			console.error('Error submitting event:', err);
			alert('Error submitting event. Please try again later.');
		} finally {
			isSubmitting = false;
		}
	}
</script>

<h1>Add a New Event</h1>

<form on:submit|preventDefault={submitEvent}>
	<label>
		Title:
		<input type="text" bind:value={title} required />
	</label>

	<label>
		Start Date and Time:
		<input type="datetime-local" bind:value={start} required />
	</label>

	<label>
		End Date and Time:
		<input type="datetime-local" bind:value={end} />
	</label>

	<label>
		Description:
		<textarea bind:value={description}></textarea>
	</label>

	<label>
		All Day:
		<input type="checkbox" bind:checked={allDay} />
	</label>

	<button class="primary" type="submit" disabled={isSubmitting}>Add Event</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 400px;
		margin: 20px auto;
	}

	label {
		margin-bottom: 10px;
	}

	input,
	textarea {
		width: 100%;
		padding: 8px;
		margin-top: 4px;
	}

	button {
		padding: 10px;
		background-color: #007bff;
		color: var(--primary-text);
		border: none;
		cursor: pointer;
	}

	button[disabled] {
		background-color: #ccc;
	}
</style>
