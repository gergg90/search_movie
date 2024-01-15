const API_KEY = "67ae54d";

export async function searchMovies({ search }) {
  
  
  if (search === "") return null;

  try {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const data = await res.json();
    const movies = data.Search
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }));


  } catch (e) {
    throw new Error("Hay un error en la llamda fetch movie");
  }
}
