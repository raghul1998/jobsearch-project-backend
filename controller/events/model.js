import mongoose from "mongoose";

import schema from "./schema.js";

schema.index({shortDescription: 'text'});
const model = mongoose.model("EventsModel", schema);
model.createIndexes();

export default model;
