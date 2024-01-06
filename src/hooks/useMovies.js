import withResult from "../mocks/with-result.json";

export function useMovies() {
  const movies = withResult.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster
  }));

  return { movies: mappedMovies };
}

