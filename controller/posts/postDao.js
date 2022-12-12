import postModel from "./postModel.js"

export const createPost = (post) =>
    postModel.create(post);

export const fetchPostById = (eventId) =>
    postModel.find(eventId);


export const getAllPosts = () => postModel.find().sort({_id: -1});
