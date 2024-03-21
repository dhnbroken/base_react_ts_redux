/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AnyAction,
  Reducer,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
// import createEncryptor from "redux-persist-transform-encrypt";
// import reducers and slice key
import { userDetailsReducer } from "./modules/user-details";
import { userRolesReducer } from "./modules/user-roles";
import { USER_ROLES_KEY, USER_DETAILS_KEY } from "./tools/constants";
import { RootState } from "./tools/types";

// persist key
const KEY_PERSIST_CONFIG = "root";

// persist config
const persistConfig: PersistConfig<RootState> = {
  key: KEY_PERSIST_CONFIG,
  storage,
  blacklist: [],
  writeFailHandler: (error) => console.log("storage error: ", error),
  // transforms: [
  //   createEncryptor({
  //     secretKey: KEY_ENCRYPT_STORE,
  //   }),
  // ],
};

// combine all reducers
export const reducer = combineReducers({
  // add reducers and slice key as  [key] : reducer
  [USER_ROLES_KEY]: userRolesReducer,
  [USER_DETAILS_KEY]: userDetailsReducer,
});

// root reducer
const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  // if action is clear state then clear browser store else return reducer state
  if (action.type === `clearState`) {
    storage.removeItem(`persist:${KEY_PERSIST_CONFIG}`);
    state = {} as RootState;
  }
  return reducer(state, action);
};

// persist Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// create store
export const makeStore = () => {
  const store: any = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

  // create persistor object
  store.__persistor = persistStore(store);

  return store;
};

// create dispatch as AppDispatch
type AppDispatch = AppStore["dispatch"];
export type AppStore = ReturnType<typeof makeStore>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
