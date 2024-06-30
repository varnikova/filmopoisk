import React, { useRef } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
  items: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carousel}>
      <button onClick={handleScrollLeft} className={styles.carouselButton}>
        Previous
      </button>
      <div className={styles.carouselContent} ref={carouselRef}>
        {items.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={handleScrollRight} className={styles.carouselButton}>
        Next
      </button>
    </div>
  );
};
