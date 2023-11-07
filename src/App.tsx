import "./App.css";
import { useState } from "react";
import { Item } from "./components/Item";

export type ItemId = `${string}-${string}-${string}-${string}-${string}`;
interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`;
  timestamp: number;
  text: string;
}

// const INITIAL_ITEMS: Item[] = [
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Videojuegos",
//   },
//   {
//     id: crypto.randomUUID(),
//     timestamp: Date.now(),
//     text: "Libros",
//   },
// ];

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //aqui usamos o 'elements' como alternativa ao aproach do querySelector, para selecionar os 'form controls'
    const { elements } = event.currentTarget;
    const input = elements.namedItem("item");
    //isso aqui ta checando se o input é um input (??) é mais q nada por frescuras do typescript
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

  const createHandleRemoveItem = (id: ItemId) => () => {
    setItems((prevItems) => {
      return prevItems.filter((currentItem) => currentItem.id !== id);
    });
  };

  return (
    <main>
      <aside>
        <h1>Prueba tecnica de react</h1>
        <h2>Anadir e y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label="Añadir elementos a la lista">
          <label>
            Elemento a introducir:
            <input name="item" required placeholder="Videojuegos" type="text" />
          </label>
          <button>Adicionar elemento à lista</button>
        </form>
      </aside>
      <section>
        <h2>Lista de elementos</h2>
        {items.length === 0 ? (
          <p>
            <strong>No hay elementos en la lista.</strong>
          </p>
        ) : (
          <ul>
            {items.map((item) => {
              return (
                <Item
                  handleClick={createHandleRemoveItem(item.id)}
                  {...item}
                  key={item.id}
                />
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
