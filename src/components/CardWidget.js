import { Icon } from '@iconify/react';
import Carrito from './Carrito';

const CardWidget = () => {
  const carrito = document.getElementsByClassName("carrito")

  function openCar() {
    carrito[0].classList.remove("inactive")
  }

  return (
    <>
    <div className='ContenedorCarroLogo'>
      <div className='contadorCarrito'>0</div>
      
      <Icon onClick={openCar} icon="maki:convenience" color="white" className="logoDelCarrito"/>
      
    </div>
    </>
  );
};

export default CardWidget;
