import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUserRoles } from "services";

import { USER_ROLES_KEY } from "../../../tools/constants";

export const getUserRoles = createAsyncThunk(
  `${USER_ROLES_KEY}/get`,
  async (_: void, { rejectWithValue }) => {
    const response = await apiUserRoles.apiGetUserRoles();
    if (!response.success) throw rejectWithValue(response);
    return response;
  }
);
