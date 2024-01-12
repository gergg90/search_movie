import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) return;

    setSearch(e.target.value);
  };

  useEffect(() => {
    
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una pelicula con el campo vacio.");
      return;
    }

    if (search.length <= 3) {
      setError("La busqueda debe tener al menos 3 caracteres.");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una pelicula con un numero");
      return;
    }
    setError(null);
  }, [search]);

  return {
    search,
    error,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
  };
}
