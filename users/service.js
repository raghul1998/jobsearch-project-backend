import * as dao from "./dao.js"

const findAllUsers = (req, res) =>
    dao.findAllUsers()
        .then(users => res.json(users));

const deleteUser = (req, res) =>
    dao.deleteUser(req.params.id)
        .then((status) => res.send(status));

const createUser = (req, res) =>
    dao.createUser(req.body)
        .then((createdUser) => res.json(createdUser));

const findUserById = (req, res) =>
    dao.findUserById(req.params.id)
        .then(user => res.json(user));

const updateUser = (req, res) => {
    dao.updateUser(req.params.id, req.body)
        .then(status => res.send(status))
};

const loginUser = (req, res) => {
    dao.findUserByEmailIdPassword(req.params.email, req.params.password)
        .then(user => res.json(user));
}

export default (app) => {
    app.get("/user", findAllUsers);
    app.delete("/register/user/:id", deleteUser);
    app.post("/register/user", createUser);
    app.get("/user/:id", findUserById);
    app.put("/register/user/:id", updateUser);
    app.get("/login/user/:email/:password", loginUser);
}
