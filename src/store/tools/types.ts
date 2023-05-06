import { Types } from "@app/api";
import { reducer } from "store/store";

import { GeneralState } from "./tools";

// create rootstate
export type RootState = ReturnType<typeof reducer>;

export interface UserRolesState {
  getRoles: GeneralState<
    Types.ApiResponse<Types.UserRolesTypes.UserRolesResponse>
  >;
}
