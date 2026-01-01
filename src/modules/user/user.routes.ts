//
/*
import {Router} from "express";
const router = Router();

*/

import express from "express";
import { userController } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = express.Router();

//app.use('/users',userRoutes);
// routes -> controller -> service

//localhost:5000/users
//create user
router.post("/",userController.createUser);

//get all users
router.get("/",logger,auth(), userController.getAllUsers);

//get single user
router.get('/:id',userController.getSingleUser);

//update user
router.put("/:id",userController.updateUser);

//delete user
router.delete("/:id",userController.deleteUser )





export const userRoutes = router;
