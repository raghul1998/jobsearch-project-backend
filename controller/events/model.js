import mongoose from "mongoose";

import schema from "./schema.js";

const model = mongoose.model("EventsModel", schema);

export default model;
