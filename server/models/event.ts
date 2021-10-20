import { Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    organizer: String,
    title: String,
    description: String,
    date: Date,
    location: {
      longitude: Number,
      latitude: Number,
    },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret.__v;
        delete ret._id;
      },
    },
  }
);
const eventModel = model('Event', eventSchema);

export default eventModel;
