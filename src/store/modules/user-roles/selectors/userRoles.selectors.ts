import { createSelector } from "@reduxjs/toolkit";
import { get } from "lodash";

import { USER_ROLES_KEY } from "../../../tools/constants";
import { UserRolesState, RootState } from "../../../tools/types";

const selectUserRolesState = (state: RootState): UserRolesState =>
  state[USER_ROLES_KEY];

export const selectGetRoleLoadingStatus = createSelector(
  selectUserRolesState,
  (userRolesState) => userRolesState.getRoles.loadingStatus
);

export const selectUserRoles = createSelector(
  selectUserRolesState,
  (userRolesState) =>
    get(userRolesState.getRoles.data, "response.userRoles", null)
);
