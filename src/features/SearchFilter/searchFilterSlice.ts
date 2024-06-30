import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchFilterState } from "./types";

const initialState: SearchFilterState = {
  title: "",
  genre: "",
  year: "",
  page: 1,
  limit: 10,
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string | undefined>) => {
      state.title = action.payload;
    },
    setGenre: (state, action: PayloadAction<string | undefined>) => {
      state.genre = action.payload;
    },
    setYear: (state, action: PayloadAction<string | undefined>) => {
      state.year = action.payload;
    },
    setPage: (state, action: PayloadAction<number | undefined>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    resetFilters: (state) => {
      state.title = "";
      state.genre = "";
      state.year = "";
      state.page = 1;
      state.limit = 10;
    },
  },
});

export const { setTitle, setGenre, setYear, setPage, setLimit, resetFilters } =
  searchFilterSlice.actions;
export const searchFilterReducer = searchFilterSlice.reducer;
