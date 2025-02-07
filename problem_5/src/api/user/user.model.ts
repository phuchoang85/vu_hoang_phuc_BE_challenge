export interface IUser extends Document {
  name: string;
  email: string;
  content: string;
  createdAt?: Date;
}

export interface GetUserParams {
  key: string;
  page: number;
  limit: number;
}

export interface GetUserResponse {
  user: IUser[];
  page: number;
  limit: number;
  total: number;
}

export interface AddUserParams {
  name: string;
  email: number;
}

export interface UpdateUserParams {
  name?: string;
  email?: string;
}
