import { connectToDatabase } from '../../../lib/mongoose';
import { Studio } from '../../../lib/models/studio';
import { json, error } from '@sveltejs/kit';

// GET all studios
export async function GET() {
    try {
        await connectToDatabase();
        const studios = await Studio.find();
        return json(studios);
    } catch (err) {
        throw error(err.status || 500, err.message);
    }
}

// POST to create a new studio
export async function POST({ request }) {
    try {
        await connectToDatabase();
        const { name, address, website, phone } = await request.json();

        // Validate required fields
        if (!name || !address?.street || !address?.city || !address?.state || !address?.zip || !website) {
            throw error(400, 'Missing required fields: name, address (street, city, state, zip), or website');
        }

        // Create and save the new studio
        const newStudio = new Studio({ name, address, website, phone });
        await newStudio.save();

        return json(newStudio, { status: 201 });
    } catch (err) {
        throw error(err.status || 500, err.message);
    }
}
