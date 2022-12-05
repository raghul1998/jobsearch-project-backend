import mongoose from 'mongoose';

const schema = mongoose.Schema({
    postTime: {type: Date, default: new Date()},
    userId: String,
    eventId: String,
    shortDescription: String,
    firstName: String,
    lastName: String,
    profileImage: String,
    image: String
}, {collection: 'posts'});

export default schema;