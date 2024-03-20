import { Router } from "express";
import todoRouter from "./todoendpoints";
import userRouter from "./userendpoints";

const mainrouter: Router = Router();
mainrouter.use("/todo", todoRouter);
mainrouter.use("/user", userRouter); 
export default mainrouter;