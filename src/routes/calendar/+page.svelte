<script lang="ts">
	import { onMount } from 'svelte';
	import { Calendar, type EventInput } from '@fullcalendar/core';
	import dayGridPlugin from '@fullcalendar/daygrid';
	import interactionPlugin from '@fullcalendar/interaction';
	import rrulePlugin from '@fullcalendar/rrule';

	let calendarEl: HTMLElement | null = null;
	let calendar: Calendar | null = null;
	let isMobile = false;

	let events: EventInput[] = [];

	// Fetch events from the API when the component loads
	async function fetchEvents() {
		const res = await fetch('/api/events');
		events = await res.json();
		if (calendar) {
			calendar.refetchEvents(); // Refetch events to update the calendar
		}
	}

	// Adjusting calendar configuration when screen size is changed
	function checkMobileView() {
		if (calendar) {
			isMobile = window.innerWidth < 768;
			calendar.refetchEvents();
		}
	}

	function disableHoverEffect() {
		const style = document.createElement('style');
		style.innerHTML = `
		.fc-daygrid-dot-event.fc-event-mirror, 
		.fc-daygrid-dot-event {
			background: none !important;
		}
		.fc-h-event {
			background: none !important;
			border: none !important;
		}
		.fc-h-event .fc-event-main {
			color: black !important;
		}
		`;
		document.head.appendChild(style);
	}

	// Define how events will look in the calendar
	function getEventContent(arg: any) {
		let startTime = new Date(arg.event.startStr).toLocaleTimeString([], {
			hour: '2-digit',
			minute: '2-digit'
		});

		const noHoverStyle = `
			padding-left: 8px;
			background-color: lightblue;
			padding: 8px;
			border-radius: 12px;
			border: 1px solid #ccc;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		`;

		if (isMobile) {
			return {
				html: `<div style="width: 100%; background-color: lightblue; border-radius: 12px; padding-left: 8px;"><span class="event-time">${startTime}</span></div>`
			};
		} else {
			return {
				html: `
					<div class="event-box" style="${noHoverStyle}">
						<span class="event-time">${startTime}</span>
						<b>${arg.event.title}</b><br>
					</div>
				`
			};
		}
	}

	// Initialize FullCalendar after component is mounted
	onMount(() => {
		isMobile = window.innerWidth < 768;

		calendar = new Calendar(calendarEl as HTMLElement, {
			plugins: [dayGridPlugin, interactionPlugin, rrulePlugin],
			initialView: 'dayGridMonth',
			events: function (fetchInfo, successCallback, failureCallback) {
				// Provide the events fetched via the API
				successCallback(events);
			},
			eventContent: getEventContent,
			titleFormat: { year: 'numeric', month: 'short' },
			viewDidMount: () => {
				const toolbar = document.querySelector('.fc-header-toolbar');
				if (toolbar) {
					toolbar.style.width = '96vw';
				}
				window.addEventListener('resize', checkMobileView);
			},
			eventClick: function (info) {
				alert(`Event: ${info.event.title}\nDetails: ${info.event.extendedProps.description}`);
			}
		});

		// Render the calendar only after fetching events
		fetchEvents().then(() => {
			calendar?.render();
			disableHoverEffect();
		});
	});
</script>

<div id="calendar-wrapper">
	<div id="calendar" bind:this={calendarEl}></div>
</div>

<style>
	#calendar-wrapper {
		overflow-x: auto;
		width: 100%;
	}

	#calendar {
		min-width: 1200px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		#calendar {
			min-width: 1000px;
		}
	}

	@media (max-width: 480px) {
		#calendar {
			min-width: 800px;
		}
	}
</style>
