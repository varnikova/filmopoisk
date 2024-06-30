import React from "react";
import { Link } from "react-router-dom";
import { ShortMovieInfo } from "../../../shared/types.ts";
import styles from "./MovieCard.module.css";

const MovieCard: React.FC<ShortMovieInfo> = ({
  id,
  title,
  poster,
  release_year,
  genre,
  rating,
  description,
}) => {
  const stars = Array.from({ length: rating }, (_, index) => index + 1);
  return (
    <Link to={`/movie/${id}`}>
      <li className={styles.card}>
        <img src={poster} alt={title} className={styles.poster} />
        <div className={styles.details}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.infoContainer}>
            <p className={styles.label}>Жанр:</p>
            <p className={styles.info}>{genre}</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.label}>Год выпуска:</p>
            <p className={styles.info}>{release_year}</p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.label}>Описание:</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
        <div className={styles.rating}>
          {stars.map((_, index) => (
            <div key={index}>⭐</div>
          ))}
          <div className={styles.stars}>
            <span className={styles.star}>{rating}</span>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default MovieCard;
