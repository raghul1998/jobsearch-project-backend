import * as dao from "./postDao.js"


export default (app) => {
    app.get("/post/:id/fetch", fetchPostById);
    app.get("/post", getAllPosts);
    app.post("/post", createPost);
}

const fetchPostById = (req, res) =>
    dao.fetchPostById(req.params.id)
        .then(event => res.json(event));


const createPost = (req, res) =>
    dao.createPost(req.body)
        .then((createEvent) => res.json(createEvent));


const getAllPosts = (req, res) =>
    dao.getAllPosts()
        .then(events => res.json(events));
