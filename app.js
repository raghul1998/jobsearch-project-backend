import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import UsersController from "./controller/users/usersController.js";
import TestController from "./controller/test/testController.js";

const app = express()


mongoose.connect("mongodb+srv://subhankarshah:Subhankar29@cluster0.tg8euh0.mongodb.net/?retryWrites=true&w=majority");

app.use(express.json())
app.use(cors())

UsersController(app)
TestController(app)
app.listen(process.env.PORT || 4000)
