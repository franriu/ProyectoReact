import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenido Ecomerce de Jhordan" />
    </>
  );
}

export default App;
