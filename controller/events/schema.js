import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    postTime: { type: Date, default: new Date() },
    userId: String,
    eventName: String,
    organiserName: String,
    timeOfEvent: String,
    dateOfEvent: Date,
    location: String,
    shortDescription: String,
    longDescription: String,
    image: String,
    applies: { type: Number, default: 0 },
    appliedBy: [String],
    comments: [String],
  },
  { collection: "events" }
);

export default schema;
