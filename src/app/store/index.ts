import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { movieReducer } from "../../entities/Movie/movieSlice";
import { authReducer } from "../../features/Auth/authSlice";
import { searchFilterReducer } from "../../features/SearchFilter/searchFilterSlice";
import { api } from "./api";

export const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  movie: movieReducer,
  searchFilter: searchFilterReducer,
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});
export const persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
