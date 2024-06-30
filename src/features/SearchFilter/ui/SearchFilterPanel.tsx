import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../../app/store";
import { GENRES, YEARS } from "../../../shared/constants.ts";
import { SelectDropdown } from "../../../shared/ui/SelectDropdown/SelectDropdown.tsx";
import {
  setGenre,
  setLimit,
  setPage,
  setTitle,
  setYear,
} from "../searchFilterSlice";
import styles from "./SearchFilterPanel.module.css";

const SearchFilterPanel: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { genre, year, page, limit } = useSelector(
    (state: RootState) => state.searchFilter,
  );

  //ставим в стор значения из поисковой строки
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("genre")) dispatch(setGenre(params.get("genre")!));
    if (params.get("year")) dispatch(setYear(params.get("year")!));
    if (params.get("title")) dispatch(setTitle(params.get("title")!));
    if (params.get("page")) dispatch(setPage(Number(params.get("page")!)));
    if (params.get("limit")) dispatch(setLimit(Number(params.get("limit")!)));
  }, [location.search, dispatch]);

  //ставим в поисковую строку значения из стора
  useEffect(() => {
    const params = new URLSearchParams();
    if (genre) {
      params.set("genre", genre);
    } else params.delete("genre");
    if (year) {
      params.set("year", year);
    } else params.delete("year");
    if (page) {
      params.set("page", String(page));
    } else params.delete("page");
    if (limit) {
      params.set("limit", String(limit));
    } else params.delete("limit");
    //todo нужна ли эта строчка
    if (params.toString() === location.search) {
      return;
    }
    navigate({ search: params.toString() });
  }, [genre, year, page, limit, navigate]);

  const handleGenreChange = (value: string) => {
    if (value === "0") {
      dispatch(setGenre(undefined));
      return;
    }
    dispatch(setGenre(value));
  };

  const handleYearChange = (value: string) => {
    if (value === "0") {
      dispatch(setYear(undefined));
      return;
    }
    dispatch(setYear(value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission if needed
  };

  let filtersBlockTitle;
  return (
    <form onSubmit={handleSubmit} className={styles.filters}>
      <h2 className={styles.filtersBlockTitle}>Фильтр</h2>
      <SelectDropdown
        label="Жанр"
        options={GENRES}
        value={genre}
        onChange={handleGenreChange}
      />
      <SelectDropdown
        label="Год выпуска"
        options={YEARS}
        value={year}
        onChange={handleYearChange}
      />
    </form>
  );
};

export default SearchFilterPanel;
