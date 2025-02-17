/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction } from "@reduxjs/toolkit";
import { Types } from "services";

import { UserRolesState } from "../../../tools/types";

// GET
export const getUserRolesPending = (state: UserRolesState) => {
  state.getRoles.loadingStatus = "loading";
  state.getRoles.data = undefined;
  state.getRoles.error = undefined;
};

export const getUserRolesFulfilled = (
  state: UserRolesState,
  action: PayloadAction<
    Types.ApiResponse<Types.UserRolesTypes.UserRolesResponse>
  >
) => {
  state.getRoles.data = action.payload;
  state.getRoles.loadingStatus = "loaded";
};

export const getUserRolesRejected = (state: UserRolesState, action: any) => {
  state.getRoles.loadingStatus = "error";
  state.getRoles.error = action.payload || action.error;
};
