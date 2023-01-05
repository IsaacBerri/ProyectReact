import { Icon } from "@iconify/react";

const Carrito = () => {
  const carrito = document.getElementsByClassName("carrito");

  function closeCar() {
    carrito[0].classList.add("inactive")
}

  return (
    <aside className="carrito inactive">
      <div className="carrito__parteSuperior">
        <Icon
          onClick={closeCar}
          icon="mdi:alpha-x"
          className="carrito__cerrarCarrito"
        />
        <h3>Mi carrito</h3>
      </div>
    </aside>
  );
};

export default Carrito;
