import { createSelector } from "@reduxjs/toolkit";

import { USER_ROLES_KEY } from "../../../tools/constants";
import { UserRolesState, RootState } from "../../../tools/types";

export const getUserRoleState = (rootState: RootState): UserRolesState =>
  rootState[USER_ROLES_KEY];

export const selectGetRoleLoadingStatus = createSelector(
  getUserRoleState,
  (userRolesInfo) => userRolesInfo.getRoles.loadingStatus
);
