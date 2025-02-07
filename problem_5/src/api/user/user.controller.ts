import { Request, Response } from "express";
import UserService from "./user.service";
import { AddUserParams, GetUserParams, UpdateUserParams } from "./user.model";

const UserController = {
  userGetAll: async (req: Request, res: Response) => {
    const params = req.query as unknown as GetUserParams;
    const response = await UserService.userGetAll(params);
    return res.status(response.status ? 200 : 400).json(response);
  },
  userGetOne: async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await UserService.userGetOne(id);
    return res.status(response.status ? 200 : 400).json(response);
  },
  addUser: async (req: Request, res: Response) => {
    const params = req.body as AddUserParams;
    const response = await UserService.addUser(params);
    return res.status(response.status ? 201 : 400).json(response);
  },

  updateUser: async (req: Request, res: Response) => {
    const { id } = req.params;
    const params = req.body as UpdateUserParams;
    const response = await UserService.updateUser(id, params);
    return res.status(response.status ? 200 : 400).json(response);
  },

  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await UserService.deleteUser(id);
    return res.status(response.status ? 200 : 400).json(response);
  },
};

export default UserController;
