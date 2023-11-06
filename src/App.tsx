import "./App.css";
import { useState } from "react";

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`;
  timestamp: number;
  text: string;
}

const INITIAL_ITEMS: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Videojuegos",
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: "Libros",
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement; //javascript puro
    if (!isInput || input == null) return;

    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now(),
    };

    setItems((prevItems) => {
      return [...prevItems, newItem];
    });

    input.value = "";
  };

  return (
    <main>
      <aside>
        <h1>Prueba tecnica de react</h1>
        <h2>Anadir e y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Elemento a introducir:
            <input name="item" required placeholder="Videojuegos" type="text" />
          </label>
          <button>Adicionar elemento à lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {items.map((item) => {
            return <li key={item.id}>{item.text}</li>;
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;
