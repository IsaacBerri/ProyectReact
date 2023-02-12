import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";
import Checkout from "./Checkout";

const Main = () => {
  return (
    <main >
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Productos" element={<ItemListContainer/>}/>
        <Route path="/Productos/:category" element={<ItemListContainer/>}/>
        <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
    </main>
  );
};

export default Main;
