import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Productos" element={<ItemListContainer/>}/>
        <Route path="/Productos/:category" element={<ItemListContainer/>}/>
        <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </main>
  );
};

export default Main;
