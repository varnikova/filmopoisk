import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FullMovieInfo } from "../../shared/types";

export interface MovieState {
  movies: FullMovieInfo[];
  selectedMovie: FullMovieInfo | null;
}

const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<FullMovieInfo[]>) => {
      state.movies = action.payload;
    },
    selectMovie: (state, action: PayloadAction<FullMovieInfo>) => {
      state.selectedMovie = action.payload;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = null;
    },
  },
});

export const { setMovies, selectMovie, clearSelectedMovie } =
  movieSlice.actions;
export const movieReducer = movieSlice.reducer;
