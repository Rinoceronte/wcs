import { connectToDatabase } from '$lib/mongoose';
import { Event } from '$lib/models/event';
import { json, error } from '@sveltejs/kit';

export async function GET() {
  await connectToDatabase();
  const events = await Event.find();  // Fetch all events
  return json(events);
}

export async function POST({ request }) {
    await connectToDatabase();
    const { title, start, end, allDay, description, location, rrule } = await request.json();
  
    // Validate the required fields
    if (!title || !start) {
      throw error(400, 'Missing required fields: title or start');
    }
  
    // Create and save the new event
    const newEvent = new Event({
      title,
      start,
      end,
      allDay,
      description,
      location,
      rrule
    });
    await newEvent.save();
  
    return json(newEvent);
  }
