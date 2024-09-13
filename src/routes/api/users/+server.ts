import { connectToDatabase } from '../../../lib/mongoose';
import { User } from '../../../lib/models/user';
import { json, error } from '@sveltejs/kit';

export async function GET() {
  await connectToDatabase();
  const users = await User.find();  // Fetch all events
  return json(users);
}

export async function POST({ request }) {
    try {
        await connectToDatabase();
        const { email, subscribed } = await request.json();

        // Validate the required fields
        if (!email || typeof subscribed !== 'boolean') {
            throw error(400, 'Missing required fields: email or subscribed');
        }

        // Upsert: Update if exists, insert if new
        const upsertedUser = await User.findOneAndUpdate(
            { email },
            { $set: { subscribed } },
            { upsert: true, new: true }
        );

        return json(upsertedUser, { status: 201 });
    } catch (err) {
        throw error(err.status || 500, err.message);
    }
}

export async function PATCH({ request }) {
    try {
        await connectToDatabase();
        const { email, subscribed } = await request.json();

        if (!email || typeof subscribed !== 'boolean') {
            throw error(400, 'Missing required fields: email or subscribed');
        }

        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $set: { subscribed } },
            { new: true }
        );

        if (!updatedUser) {
            throw error(404, 'User not found');
        }

        return json(updatedUser);
    } catch (err) {
        return error(err.status || 500, err.message);
    }
}
