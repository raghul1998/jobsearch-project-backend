import mongoose from 'mongoose';

const schema = mongoose.Schema({
    verified: {type: Boolean, default: false},
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: String,
    password: String,
    profileImage: String,
    phoneNumber: Number,
    gender: {type: String, enum: ['male', 'female']},
    currentGradLevel: {type: String, enum: ['graduate', 'undergraduate']},
    userRole: {type: String, enum:['organiser', 'student', 'both']}
}, {collection: 'users'});

export default schema;
