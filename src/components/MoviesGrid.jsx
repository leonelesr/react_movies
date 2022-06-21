import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      { movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie}></MovieCard>
      ))}
    </ul>
  );

  /* Cuando el componente ya se cargue en el dom se va a ejecutar este efecto secundario
  Podemos hacer una llamada asincrona aqui */
  useEffect(() => [
    fetch("/discover/movie", {
      headers: {
        
      }
    })
  ]);
}
