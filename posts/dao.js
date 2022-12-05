import model from "./model.js"

export const getAllPosts = () => model.find().sort({_id: -1});

export const createPost = (post) =>
    model.create(post);

export const fetchPostById = (eventId) =>
    model.find('eventId');
