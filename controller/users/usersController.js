import * as usersDao from "../users/userDao.js";

export default (app) => {
  app.post("/api/user", createUser);
  app.get("/api/user/login/:email/:password", loginUser);
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
