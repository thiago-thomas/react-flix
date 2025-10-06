import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavMovie {
  id: number;
  title: string;
  poster_path: string;
}

const initialState: FavMovie[] = [
  { id: 105, title: "Back to the Future", poster_path: "/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg" },
  { id: 9532, title: "Final Destination", poster_path: "/1mXhlQMnlfvJ2frxTjZSQNnA9Vp.jpg" },
  { id: 218, title: "The Terminator", poster_path: "/hzXSE66v6KthZ8nPoLZmsi2G05j.jpg" },
];

const favmoviesSlice = createSlice({
  name: "favmovies",
  initialState,
  reducers: {
    movieAdded:(state, action: PayloadAction<FavMovie>) => {
      state.push(action.payload)
    },
    movieDeleted: (state, action: PayloadAction<FavMovie>) => {
      const { id } = action.payload
      const index = state.findIndex((movie) => movie.id === id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
  selectors: {
    selectAllFavMovies: favmoviesState => favmoviesState,
    selectCountFavMovies: favmoviesState => favmoviesState.length,
    existFavMovieById: (favmovieState, movieId: number) => {
      return favmovieState.some((favMovie) => favMovie.id === movieId)
    }
  }
});

export const { selectAllFavMovies, selectCountFavMovies, existFavMovieById } = favmoviesSlice.selectors

export const { movieAdded, movieDeleted } = favmoviesSlice.actions

export default favmoviesSlice.reducer;
