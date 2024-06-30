import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030/api/v1/" }),
  endpoints: (builder) => ({
    fetchMovies: builder.query({
      query: ({ title, genre, year, page, limit }) => ({
        url: "search",
        params: { title, genre, release_year: year, page, limit },
      }),
    }),
    fetchMovieById: builder.query({
      query: (id) => ({
        url: `movie/${id}`,
      }),
    }),
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: `login`,
        method: "POST",
        body: { username, password },
      }),
    }),
  }),
});

export const { useFetchMoviesQuery, useFetchMovieByIdQuery, useLoginMutation } =
  api;
