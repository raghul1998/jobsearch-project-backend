import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    email: String,
    password: String,
    profileImage: String,
    phoneNumber: Number,
    gender: String,
    level: String,
    currentGradLevel: String,
    userRole: String,
  },
  { collection: "users" }
);

export default schema;
