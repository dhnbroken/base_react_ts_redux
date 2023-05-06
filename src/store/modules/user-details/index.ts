// reducers, actions
export { userDetailsReducer, userDetailsActions } from "./userDetails.slice";

// async thunk
export {
  createUserDetails,
  deleteUserDetails,
  getUserDetails,
  updateUserDetails,
} from "./actions/userDetails.thunk";
