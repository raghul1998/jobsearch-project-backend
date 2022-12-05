import model from "./model.js"

export const findAllUsers = () => model.find();

export const deleteUser = (id) =>
    model.deleteOne({_id: id});

export const createUser = (user) =>
    model.create(user);

export const findUserById = (id) =>
    model.find().findOne({_id:id});

export const updateUser = (id, user) =>
    model.find().findOneAndUpdate({_id:id},{$set:user});

export const findUserByEmailIdPassword = (email,password) =>
    model.find().findOne({email:email,password:password});
