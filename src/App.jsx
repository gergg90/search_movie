import "./app.css";
import { Movies } from "./components/Movies.jsx";
import { useMovies } from "./hooks/useMovies.js";
import { useSearch } from "./hooks/useSearch.js";
import { useState } from "react";

// ! https://www.omdbapi.com/?apikey=67ae54d&s=salvajes

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  const handleChange = (e) => {
    const newSearch = e.target.value;
    updateSearch(newSearch);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas.</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name="search"
            placeholder="Blade runner, it, Rambo..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>

        {error && (
          <p
            style={{
              color: "black",
              backgroundColor: "rgba(255,0,0, 0.4)",
              borderRadius: "8px",
              padding: "4px 8px",
            }}
          >
            {error}
          </p>
        )}
      </header>

      <main>{loading ? <p>Cargando</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
