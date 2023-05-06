import {
  UserDetailsResponse,
  CreateUserDetailsRequest,
  UpdateUserDetailsRequest,
  DeleteUserDetailsResponse,
} from "./types";
import { baseUrl } from "../../base-api/baseUrl";
import { handleSubModuleError } from "../../tools/apiError";
import { ApiResponse } from "../../tools/types";

export const apiGetUserDetails = async ({
  userId,
}: {
  userId: string;
}): Promise<ApiResponse<UserDetailsResponse>> => {
  try {
    const { data, status } = await baseUrl.get<UserDetailsResponse>(
      `user/${userId}`
    );
    return { response: data, status, success: !!Object.keys(data).length };
  } catch (error) {
    return handleSubModuleError(error);
  }
};

export const apiCreateUserDetails = async (
  userData: CreateUserDetailsRequest
): Promise<ApiResponse<UserDetailsResponse>> => {
  try {
    const { data, status } = await baseUrl.post<UserDetailsResponse>(
      `create-user`,
      userData
    );
    return { response: data, status, success: true };
  } catch (error) {
    return handleSubModuleError(error);
  }
};

export const apiUpdateUserDetails = async ({
  userId,
  userData,
}: {
  userId: string;
  userData: UpdateUserDetailsRequest;
}): Promise<ApiResponse<UserDetailsResponse>> => {
  try {
    const { data, status } = await baseUrl.patch<UserDetailsResponse>(
      `update-user/${userId}`,
      userData
    );
    return { response: data, status, success: !!Object.keys(data).length };
  } catch (error) {
    return handleSubModuleError(error);
  }
};

export const apiDeleteUserDetails = async ({
  userId,
}: {
  userId: string;
}): Promise<ApiResponse<DeleteUserDetailsResponse>> => {
  try {
    const { data, status } = await baseUrl.delete<DeleteUserDetailsResponse>(
      `user/${userId}`
    );
    return { response: data, status, success: !!Object.keys(data).length };
  } catch (error) {
    return handleSubModuleError(error);
  }
};
