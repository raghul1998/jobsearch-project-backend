import * as dao from "./dao.js"

const getAllPosts = (req, res) =>
    dao.getAllPosts()
        .then(events => res.json(events));

const createPost = (req, res) =>
    dao.createPost(req.body)
        .then((createEvent) => res.json(createEvent));

const fetchPostById = (req, res) =>
    dao.fetchPostById(req.params.id)
        .then(event => res.json(event));

export default (app) => {
    app.get("/post/:id/fetch", fetchPostById);
    app.get("/post", getAllPosts);
    app.post("/post", createPost);
}
