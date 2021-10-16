import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  title: String,
  date: Date,
  location: {
    longitude: Number,
    latitude: Number,
  },
});
const eventModel = model('Event', eventSchema);

export default eventModel;
