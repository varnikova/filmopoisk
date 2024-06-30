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
    <div className={styles.moviePage}>
      <img src={movie.poster} />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Year: {movie.release_year}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
      <p>total_rates_count: {movie.total_rates_count}</p>
      <h2>Actors</h2>
      <Carousel items={actorItems} />
    </div>
  );
};

export default MoviePage;
