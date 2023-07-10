import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import { reducer as favoritesReducer } from "./favorite/favorite.slice";
// import { userSlice } from "./user/user.slice";

const reducers = combineReducers({
  favorites: favoritesReducer,
  // user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
