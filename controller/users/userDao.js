import userModel from "./userModel.js";

export const creatUser = (user) => userModel.create(user);

export const findUserByEmailIdPassword = (email, password) =>
  userModel.find().findOne({ email: email, password: password });

export const deleteUser = (id) => userModel.deleteOne({ _id: id });

export const findUserById = (id) => userModel.find().findOne({ _id: id });

export const updateUser = (id, user) =>
  userModel.find().findOneAndUpdate({ _id: id }, { $set: user });

export const findAllUsers = () => userModel.find();
