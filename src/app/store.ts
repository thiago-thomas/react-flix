import { configureStore } from "@reduxjs/toolkit";
import favmoviesReducer from "../features/favmovies/favmoviesSlice";

export const store = configureStore({
  reducer: {
    favmovies: favmoviesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
