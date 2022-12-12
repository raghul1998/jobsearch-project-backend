import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import UsersController from "./controller/users/usersController.js";
import TestController from "./controller/test/testController.js";
import eventsController from "./controller/events/service.js";
import postController from "./controller/posts/postController.js"

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://subhankarshah:Subhankar29@cluster0.tg8euh0.mongodb.net/?retryWrites=true&w=majority"
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());
app.use(cors());

UsersController(app);
eventsController(app);
TestController(app);
postController(app);


app.listen(process.env.PORT || 4000);
