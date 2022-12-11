import * as usersDao from "../users/userDao.js";

export default (app) => {
  app.post("/api/user", createUser);
  app.get("/api/user/login/:email/:password", loginUser);
  app.get("/api/user/findAll", findAllUsers);
  app.delete("/api/register/user/:id", deleteUser);
  app.get("/api/user/:id", findUserById);
  app.put("/api/register/user/:id", updateUser);
};

const createUser = (req, res) => {
  console.log("new user" + JSON.stringify(req.body));
  usersDao.creatUser(req.body).then((createdUser) => res.json(createdUser));
};

const loginUser = (req, res) => {
  usersDao
    .findUserByEmailIdPassword(req.params.email, req.params.password)
    .then((user) => res.json(user));
};

const findAllUsers = (req, res) =>
  usersDao.findAllUsers().then((users) => res.json(users));

const deleteUser = (req, res) =>
  usersDao.deleteUser(req.params.id).then((status) => res.send(status));

const findUserById = (req, res) =>
  usersDao
    .deleteUser(req.params.id)
    .findUserById(req.params.id)
    .then((user) => res.json(user));

const updateUser = (req, res) => {
  usersDao
    .updateUser(req.params.id, req.body)
    .then((status) => res.send(status));
};
