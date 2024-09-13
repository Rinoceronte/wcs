import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start: { type: Date, required: true },    
  end: { type: Date },                      
  allDay: { type: Boolean, default: false }, 
  description: { type: String },             
  location: { type: String },               
  rrule: {                                   
    freq: { type: String },                 
    interval: { type: Number },              
    dtstart: { type: Date },                 
    until: { type: Date },                   
    byweekday: [{ type: String }]            
  },
  createdAt: { type: Date, default: Date.now }, 
  updatedAt: { type: Date, default: Date.now }
});

export const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);
