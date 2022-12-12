import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    postTime: {type: Date, default: new Date()},
    userId: String,
    eventId: String,
    shortDescription: String,
    firstName: String,
    lastName: String,
    profileImage: String,
    image: String
}, {collection: 'posts'});

export default postSchema;