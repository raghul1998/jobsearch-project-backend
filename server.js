import mongoose from "mongoose";
import express from 'express';
import cors from 'cors'
import bodyParser from "body-parser";

import EventController from "./events/service.js"
import UserController from "./users/service.js"
import PostController from "./posts/service.js"
import HelloController from "./hello-controller.js";

const CONNECTION_STRING = "mongodb://127.0.0.1:27017/jobsearch";

mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
               "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

UserController(app);
EventController(app)
PostController(app);
HelloController(app);

app.listen(process.env.PORT || 4000);
