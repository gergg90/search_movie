function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p> Year: {movie.year}</p>
          <img src={movie.image} alt={movie.title} />
        </li>
      ))}
    </ul>
  );
}

function NoMovieResult() {
  return <p>No se encontraron resultados.</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;

  return (
    <div>
      {hasMovies ? <ListOfMovies movies={movies} /> : <NoMovieResult />}
    </div>
  );
}
