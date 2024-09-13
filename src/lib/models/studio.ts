import mongoose from 'mongoose';

const studioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        street2: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
    },
    phone: {type: String},
    website: { type: String, required: true }
});

export const Studio = mongoose.models.Studio || mongoose.model('Studio', studioSchema);
