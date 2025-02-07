import { isError } from "joi";
import {
  AddUserParams,
  GetUserParams,
  GetUserResponse,
  IUser,
  UpdateUserParams,
} from "./user.model";
import {
  ApiResponse,
  errorResponse,
  successResponse,
} from "../../utils/responseHandler";
import UserDB from "./user.schema";
import mongoose from "mongoose";

const UserService = {
  userGetAll: async (
    params: GetUserParams
  ): Promise<ApiResponse<GetUserResponse | null>> => {
    try {
      const { key, limit = 10, page = 0 } = params;
      const skip = limit * page;

      const query = key
        ? {
            $or: [
              { name: { $regex: key, $options: "i" } },
              { email: { $regex: key, $options: "i" } },
            ],
          }
        : {};

      const user = await UserDB.find(query).skip(skip).limit(limit).select("name email");
      const total = await UserDB.countDocuments(query);
      return successResponse({ user, page, limit, total });
    } catch (error) {
      return errorResponse(isError(error) ? error.message : "Unknown error");
    }
  },

  addUser: async (
    params: AddUserParams
  ): Promise<ApiResponse<IUser | null>> => {
    try {
      const newUser = new UserDB(params);
      await newUser.save();
      return successResponse(newUser);
    } catch (error) {
        console.log(error)
      return errorResponse(isError(error) ? error.message : "Unknown error");
    }
  },
  updateUser: async (
    id: string,
    params: UpdateUserParams
  ): Promise<ApiResponse<IUser | null>> => {
    try {
      const updatedUser = await UserDB.findByIdAndUpdate(
        new mongoose.Types.ObjectId(id),
        params,
        {
          new: true,
        }
      );
      if (!updatedUser) return errorResponse("User not found");

      return successResponse(updatedUser);
    } catch (error) {
      return errorResponse(isError(error) ? error.message : "Unknown error");
    }
  },

  // Xóa user theo ID
  deleteUser: async (id: string): Promise<ApiResponse<null>> => {
    try {
      const deletedUser = await UserDB.findByIdAndDelete(
        new mongoose.Types.ObjectId(id)
      );
      if (!deletedUser) return errorResponse("User not found");

      return successResponse(null, "User deleted successfully");
    } catch (error) {
      return errorResponse(isError(error) ? error.message : "Unknown error");
    }
  },
  userGetOne: async (id: string): Promise<ApiResponse<IUser | null>> => {
    try {
      const user = await UserDB.findById(new mongoose.Types.ObjectId(id));
      if (!user) return errorResponse("User not found");

      return successResponse(user);
    } catch (error) {
      return errorResponse(isError(error) ? error.message : "Unknown error");
    }
  },
};

export default UserService;
