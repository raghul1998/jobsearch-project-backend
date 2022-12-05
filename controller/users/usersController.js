import * as usersDao from '../users/userDao.js'

export default (app) => {
    app.post('/api/user', createUser);
}


const createUser = async (req, res) => {
    const newUser = req.body;

    const createUser = await usersDao.creatUser(newUser);

    res.json(createUser);
}