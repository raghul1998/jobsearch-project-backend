import userModel from "./userModel.js";

export const creatUser = (user) => userModel.create(user);

export const findUserByEmailIdPassword = (email, password) =>
  userModel.find().findOne({ email: email, password: password });
