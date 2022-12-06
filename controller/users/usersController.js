import * as usersDao from '../users/userDao.js'

export default (app) => {
    app.post('/api/user', createUser);
}

const createUser = (req, res) => {

    console.log("new user" + JSON.stringify(req.body))
    usersDao.creatUser(req.body).then((createdUser) => res.json(createdUser));
}