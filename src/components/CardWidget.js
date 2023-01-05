import { Icon } from '@iconify/react';

const CardWidget = () => {
  const carrito = document.getElementsByClassName("carrito")
  console.log(carrito[0]);

  function openCar() {
    carrito[0].classList.remove("inactive")
  }
  function closeCar() {
    carrito[0].classList.add("inactive")
}

  return (
    <>
    <div className='ContenedorCarroLogo'>
      <div className='contadorCarrito'>0</div>
      
      <Icon onClick={openCar} icon="maki:convenience" color="white" className="logoDelCarrito"/>
      
    </div>
    <aside className="carrito inactive">
        <div className='carrito__parteSuperior'>
        <Icon onClick={closeCar} icon="mdi:alpha-x" className='carrito__cerrarCarrito'/>
        <h3>Mi carrito</h3>
        </div>
    </aside>
    </>
  );
};

export default CardWidget;
