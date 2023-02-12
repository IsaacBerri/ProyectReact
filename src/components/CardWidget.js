import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

const CardWidget = () => {

  const { totalProductos } = useCarrito();
  return (
    <>
      <div className="ContenedorCarroLogo">
        <div className="contadorCarrito">{totalProductos}</div>
        <Link to={"/Carrito"}>
        <Icon
          icon="maki:convenience"
          className="logoDelCarrito"
        />
        </Link> 
      </div>
    </>
  );
};

export default CardWidget;
