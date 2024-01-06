import "./app.css";
import { useState, useEffect } from "react";
import { Movies } from "./components/Movies.jsx";
import { useMovies } from "./hooks/useMovies.js";

// ! https://www.omdbapi.com/?apikey=67ae54d&s=salvajes

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ query });
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === "") {
      setError("No se puede buscar una pelicula vacia.");
      return;
    }

    if (query.length <= 3) {
      setError("La busqueda debe tener al menos 3 caracteres.");
      return;
    }

    if (query.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un numero");
      return;
    }
    setError(null);
  }, [query]);

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas.</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={query}
            name="query"
            placeholder="Blade runner, it, Rambo..."
          />

          <button type="submit">Buscar</button>
        </form>

        {error && (
          <p style={{ color: "red", backgroundColor: "rgba(255,0,0, 0.4)" }}>
            {error}
          </p>
        )}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
