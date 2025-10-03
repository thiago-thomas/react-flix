import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavMovie {
  id: number;
  title: string;
  poster_path: string;
}

const initialState: FavMovie[] = [
  { id: 157336, title: "Interestelar", poster_path: "/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg" },
  { id: 574475, title: "Premonição 6: Laços de Sangue", poster_path: "/niTRdfNCT29PXU9YpPPuISrBIw7.jpg" },
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
