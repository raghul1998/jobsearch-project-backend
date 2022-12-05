import mongoose from "mongoose";

const schema = mongoose.Schema({
    verified: {type: Boolean, default: false},
    firstName: String,
    lastName: String,
    dob: Date,
    email: String,
    password: String,
    image: String,
    number: Number,
    sex: {type: String, enum: ['M', 'F', 'B']},
    level: {type: String, enum: ['undergraduate', 'graduate']},
    role: {type: String, enum:['Organiser', 'Student', 'Organise and Student']}
}, {collection: 'users'});

export default schema;