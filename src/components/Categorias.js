import { Link } from "react-router-dom"
import { Icon } from "@iconify/react";

const Categorias = () => {

    const categorias = document.querySelector(".categorias")

    function toggleCategorias() {
        categorias.classList.toggle("inactive")
    }
    
  return (
    <div className="categorias inactive">
        <Link onClick={toggleCategorias} to={"/Productos/men's clothing"}>Hombre</Link>
        <Link onClick={toggleCategorias} to={"/Productos/women's clothing"}>Mujer</Link>
        <Link onClick={toggleCategorias} to={"/Productos/jewelery"}>Joyeria</Link>
        <Link onClick={toggleCategorias} to={"/Productos/electronics"}>Tecnologia</Link>
        <Icon onClick={toggleCategorias} icon="mdi:alpha-x" className="cerrarCategorias"/>
    </div>
  )
}

export default Categorias