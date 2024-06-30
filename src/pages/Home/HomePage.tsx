import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useFetchMoviesQuery } from "../../app/store/api";
import { Pagination } from "../../components/Pagination/Pagination.tsx";
import MovieCard from "../../entities/Movie/ui/MovieCard";
import SearchBar from "../../features/SearchBar/ui/SearchBar.tsx";
import { setPage } from "../../features/SearchFilter/searchFilterSlice";
import SearchFilterPanel from "../../features/SearchFilter/ui/SearchFilterPanel.tsx";
import { ShortMovieInfo } from "../../shared/types.ts";
import Spinner from "../../shared/ui/Loader/Spinner.tsx";
import styles from "./Home.module.css";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const { title, genre, year, page, limit } = useSelector(
    (state: RootState) => state.searchFilter,
  );

  const { data, error, isLoading } = useFetchMoviesQuery({
    title: title ? title : undefined,
    genre: genre ? genre : undefined,
    year: year ? year : undefined,
    page: page ? page : undefined,
    limit: limit ? limit : undefined,
  });

  useEffect(() => {
    if (data && data.total_pages < page) {
      dispatch(setPage(1));
    }
  }, [data, dispatch, page]);

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className={styles.homePage}>
      <div className={styles.sidebar}>
        <SearchFilterPanel />
      </div>
      <div className={styles.main}>
        <SearchBar />
        {isLoading && (
          <div className={styles.center}>
            <Spinner />
          </div>
        )}
        {error && <div className={styles.center}>error</div>}
        {Boolean(data && data?.search_result.length) && (
          <>
            <ul className={styles.movieList}>
              {data?.search_result.map((movie: ShortMovieInfo) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </ul>
            <Pagination
              currentPage={page}
              totalPages={data.total_pages}
              onPageChange={handlePageChange}
            />
          </>
        )}
        {Boolean(data && !data?.search_result.length) && (
          <div className={styles.center}>
            <h2>Фильмы не найдены</h2>
            <h3>Измените запрос и попробуйте снова</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
