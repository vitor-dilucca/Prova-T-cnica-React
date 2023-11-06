import "./App.css";

function App() {
  return (
    <main>
      <aside>
        <h1>Prueba tecnica de react</h1>
        <h2>Anadir e y eliminar elementos de una lista</h2>
        <form>
          <label>
            Elemento a introducir:
            <input name="item" required placeholder="Videojuegos" type="text" />
          </label>
          <button>Adicionar elemento à lista</button>
        </form>
      </aside>
      <section>
        <h2>Mi prueba tecnica</h2>
        <ul>
          <li>Videojuegos</li>
          <li>Libros</li>
          <li>Series</li>
          <li>Peliculas</li>
        </ul>
      </section>
    </main>
  );
}

export default App;
