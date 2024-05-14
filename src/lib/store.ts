import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./apiService";
import counterReducer from "./features/counter/counter";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      [apiService.reducerPath]: apiService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiService.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
