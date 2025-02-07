export interface ApiResponse<T = any> {
  status: boolean;
  message: string;
  data?: T;
}

export const successResponse = <T>(
  data: T,
  message = "Success"
): ApiResponse<T> => {
  return { status: true, message, data };
};

export const errorResponse = (
  message = "An error occurred"
): ApiResponse<null> => {
  return { status: false, message, data: null };
};
