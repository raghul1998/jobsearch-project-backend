import mongoose from "mongoose";

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: String,
    email: String,
    password: String,
    image: String,
    number: Number,
    sex: String,
    level: String,
    role: String
}, {collection: 'users'});

export default schema;