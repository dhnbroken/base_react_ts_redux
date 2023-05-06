// store - dispatch - selector
export { store, useAppDispatch, useAppSelector, persistor } from "./store";

// state types
export type {
  UserDetailsState,
  RootState,
  UserRolesState,
} from "./tools/types";

// thunks - reducer-actions
export {
  createUserDetails,
  deleteUserDetails,
  getUserDetails,
  updateUserDetails,
  userDetailsActions,
} from "./modules/user-details";
export { getUserRoles, userRolesActions } from "./modules/user-roles";
