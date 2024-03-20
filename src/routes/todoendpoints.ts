import express, { Router } from "express";
import { findAll } from "../controllers/find";
import { findtaskById } from "../controllers/findbyid";
import { updatethetask } from "../controllers/updatebyid";
import { deleteById } from "../controllers/deletebyid";
import { creatingtodo } from "../controllers/creating";
import { verifyingtoken } from "../utils/token";

const todoRouter: Router = express.Router();
todoRouter.use(verifyingtoken);
todoRouter.post("/createtodo", creatingtodo);
todoRouter.patch("/updatetodo/:updateId", updatethetask);
todoRouter.get("/findalltodo", findAll);
todoRouter.get("/findtodoid/:findId", findtaskById);
todoRouter.delete("/deletetodoid/:deleteId", deleteById);

export default todoRouter;

