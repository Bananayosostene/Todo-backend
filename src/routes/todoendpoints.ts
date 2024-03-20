import express, { Router } from "express";
import { findAll } from "../controllers/find";
import { findtaskById } from "../controllers/findbyid";
import { updatethetask } from "../controllers/updatebyid";
import { deleteById } from "../controllers/deletebyid";
import { creatingtodo } from "../controllers/creating";
import { verifyingtoken } from "../utils/token";

const todoRouter: Router = express.Router();
todoRouter.post("/post", creatingtodo);
todoRouter.patch("/update/:updateId", updatethetask);
todoRouter.get("/gets", findAll);
todoRouter.get("/get/:findId", findtaskById);
todoRouter.delete("/delete/:deleteId", deleteById);
todoRouter.use(verifyingtoken);

export default todoRouter;

