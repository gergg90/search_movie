import './app.css'

// ! http://www.omdbapi.com/?apikey=67ae54d&title=rocky

function App() {
  return (
    <div className="page">


      <header>
        <h1>Buscador de peliculas.</h1>
        <form className="form">
          <input type="buttom" placeholder="Write your movie." />
          <button type="submit">Buscar</button>
        </form>
      </header>


      <main>
        <p>Aqui iran las Movies</p>
      </main>

    </div>
  );
}

export default App;
