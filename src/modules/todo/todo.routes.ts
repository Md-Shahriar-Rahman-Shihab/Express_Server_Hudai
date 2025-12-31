//
/*
import {Router} from "express";
const router = Router();

*/

import express from "express";
import { TodoControllers } from "./todo.controller";

const router = express.Router();

//app.use('/todos',todoRoutes);
// routes -> controller -> service

//localhost:5000/todos

//create todo
router.post("/",TodoControllers.createTodo)

router.get("/",TodoControllers.getAllTodo)

router.get("/:id/",TodoControllers.getSingleTodo)

router.put("/:id",TodoControllers.updateTodo)

router.delete("/:id", TodoControllers.deleteTodo )






export const todoRoutes = router;
