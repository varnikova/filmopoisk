import React from "react";
import styles from "./ActorCard.module.css";

interface Actor {
  name: string;
  photo: string;
}

interface ActorCardProps {
  actor: Actor;
}

export const ActorCard: React.FC<ActorCardProps> = ({ actor }) => {
  return (
    <div className={styles.actorCard}>
      <img
        src={actor.photo}
        alt={`${actor.name} портрет фото`}
        className="actor-photo"
      />
      <div className={styles.actorInfo}>
        <p className={styles.name}>{actor.name}</p>
      </div>
    </div>
  );
};
