import { UserRolesResponse } from "./types";
import { baseUrl } from "../../base-api/baseUrl";
import { handleSubModuleError } from "../../tools/apiError";
import { ApiResponse } from "../../tools/types";

export const apiGetUserRoles = async (): Promise<
  ApiResponse<UserRolesResponse>
> => {
  try {
    const { data, status } = await baseUrl.get("user-roles");
    return { response: data, status, success: !!Object.keys(data).length };
  } catch (error) {
    return handleSubModuleError(error);
  }
};
