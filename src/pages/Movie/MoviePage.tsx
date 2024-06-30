import React from "react";
import { useParams } from "react-router-dom";
import { useFetchMovieByIdQuery } from "../../app/store/api";

import { ActorCard } from "../../entities/Actor/ui/ActorCard.tsx";
import { Carousel } from "../../shared/ui/Carousel/Carousel.tsx";
import styles from "./Movie.module.css";

const MoviePage: React.FC = () => {
  //todo сделать типизацию по-другому
  const { id } = useParams<{ id: string }>();
  const { data: movie, error, isLoading } = useFetchMovieByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;
  const actorItems = movie.actors.map((actor: any) => (
    <ActorCard key={actor.id} actor={actor} />
  ));
  console.log(movie);
  return (
    <>
      <div className={styles.movieDetailsContainer2}>
        <img
          src={movie.poster}
          alt={movie.title}
          className={styles.moviePosterImg}
        />
        <div className={styles.movieDetailsContainer1}>
          <h1 className={styles.titleHeading}>{movie.title}</h1>
          <div className={styles.movieDetailsContainer3}>
            <div className={styles.movieDetailsRow}>
              <div className={styles.fantasyInfoContainer}>
                <span className={styles.genreLabel}>Жанр:</span>
                <span className={styles.fantasyMovieDetailsTextStyle}>
                  {movie.genre}
                </span>
              </div>
            </div>
            <div className={styles.movieDetailsRow}>
              <div className={styles.fantasyInfoContainer}>
                <span className={styles.genreLabel}>Год выпуска:</span>
                <span className={styles.fantasyMovieDetailsTextStyle}>
                  {movie.release_year}
                </span>
              </div>
            </div>
            <div className={styles.movieDetailsRow}>
              <div className={styles.fantasyInfoContainer}>
                <span className={styles.genreLabel}>Рейтинг:</span>
                <span className={styles.fantasyMovieDetailsTextStyle}>
                  {movie.rating}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.movieDetailsColumn}>
            <h2 className={styles.fantasyDescriptionHeading}>Описание</h2>
            <p className={styles.storyTextStyle}>{movie.description}</p>
          </div>
        </div>
      </div>
      <h2>Actors</h2>
      <Carousel items={actorItems} />
    </>
  );
};

export default MoviePage;
