import {BrowserRouter, Routes, Route} from "react-router-dom"

import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { Detail} from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/detail/:id" element={<Detail/>} />

        <Route path="*" element="404 llora" />
      </Routes>
      <ItemListContainer/> 
      </BrowserRouter>
  );
}

export default App;
