import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";
import { Icon } from "@iconify/react";

const Carrito = () => {
  const { carrito, vaciarCarrito, eliminarProducto, total } = useCarrito();

  return (
    <div className="containerCarro">
      <div className="carrito">
        {carrito.length ? (
          carrito.map((producto) => {
            return (
              <article className="contendorProducto">
                <img src={producto.image} alt={producto.title} />
                <h4>{producto.title}</h4>
                <p>{producto.rating.count}</p>
                <p>$ {producto.price}</p>
                <span onClick={() => eliminarProducto(producto)}>
                  <Icon icon="mdi:trash-can-empty" width="25" height="25" />
                </span>
              </article>
            );
          })
        ) : (
          <div className="carritoVacio">
            <img src="https://i.imgur.com/rcGJXLl.png" alt="carritoVacio" />
            <h3>El carrito esta vacio</h3>
            <Link to={"/Productos"}>Ir a tienda</Link>
          </div>
        )}
      </div>
      <div className="infoDeMontoFinal">
        {carrito.length ? (
          <>
            <div className="montoFinal">
              <h3>Carriro</h3>
              <p>total</p>
              <p>$ {total}</p>
            </div>
            <div className="buttonDeCarrito">
              <a onClick={vaciarCarrito}>Limpiar carrito</a>
              <Link to="/Productos">Seguir comprando</Link>
              <Link to="/Checkout">Terminar compra</Link>
            </div>
          </>
        ) : (
          <>
            <div className="montoFinal">
              <h3>Carriro</h3>
              <p>No hay productos</p>
              <p>total</p>
              <p>$ 0</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Carrito;
