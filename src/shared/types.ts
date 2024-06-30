import { GENRES_MAP } from "./constants.ts";

type GenresEnglish = keyof typeof GENRES_MAP;
// @ts-ignore
type GenresRussian = (typeof GENRES_MAP)[GenresEnglish];

export type Actor = {
  name: string;
  photo: string; // base64 img
};

export type FullMovieInfo = {
  id: string;
  title: string;
  description: string;
  release_year: number;
  poster: string; //base64 img
  genre: string;
  rating: string; //float
  total_rates_count: string; //int
  actors: Actor[];
};

export type ShortMovieInfo = Exclude<
  FullMovieInfo,
  "actors" | "total_rates_count"
>;
