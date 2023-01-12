import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Productos" element={<ItemListContainer/>}/>
      </Routes>
    </main>
  );
};

export default Main;
