import { Router } from "express";
import UserController from "./user/user.controller";

const router = Router();

router.get("/users", UserController.userGetAll);
router.get("/users/:id", UserController.userGetOne);
router.post("/users", UserController.addUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

export { router };
