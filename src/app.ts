import express, { Request, Response } from "express"


import initDB from "./config/db"
import logger from "./middleware/logger"
import { userRoutes } from "./modules/user/user.routes"
import { todoRoutes } from "./modules/todo/todo.routes"
import { authRoutes } from "./modules/auth/auth.routes"


const app = express()


// parser ---middleWare
app.use(express.json())
// app.use(express.urlencoded())  form data


//initialize database
initDB()

//logger middleware

// '/' -->localhost:5000/
app.get('/', logger, (req:Request, res:Response) => {
  res.send('Hello Shihab Shahriar!')
})

//User CRUD

//users create
app.use("/users",userRoutes);

//todos crud

app.use("/todos",todoRoutes);

//auth.routes
app.use("/auth",authRoutes);


//route not found
app.use((req:Request, res:Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});


export default app;
