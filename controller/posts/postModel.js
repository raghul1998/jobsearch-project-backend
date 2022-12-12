import mongoose from 'mongoose';
import postSchema from "./postSchema.js";

const postModel = mongoose.model('PostsModel', postSchema);

export default postModel;