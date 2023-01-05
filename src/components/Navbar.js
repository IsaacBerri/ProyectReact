import CardWidget from "./CardWidget";
import Carrito from "./Carrito";

function Navbar(props) {
  if (props.isNavbar) {
    return (
      <nav className="barraNav">
        <div className="barraNav__contenedor">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/076/592/original/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"
            alt="logoNabvar"
            className="barraNav__logo"
          />
        
        <ul className="barraNav__lista">
          <a href="#" className="barraNav__link" id="seccionInicio"><li className="barraNav__itemsDeLaLista">Inicio</li></a>
          <a href="#" className="barraNav__link" id="seccionNosotros"><li className="barraNav__itemsDeLaLista">Nosotros</li></a>
          <a href="#" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Productos</li></a>
          <a href="#" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Ubicacion</li></a>
          <a href="#" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Contacto</li></a>
        </ul>
        </div>
        <CardWidget/>
        <Carrito/>
      </nav>
    );
  } else {
    return (
      <nav className="Footer">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/076/592/original/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"
            alt="logoNabvar"
            className="Footer__logo"
          />
        </div>
        <ul className="Footer__lista">
          <a href="#" className="Footer__link"><li className="Footer__itemsDeLaLista">Facebook</li></a>
          <a href="#" className="Footer__link"><li className="Footer__itemsDeLaLista">Instagram</li></a>
          <a href="#" className="Footer__link"><li className="Footer__itemsDeLaLista">Twiteer</li></a>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
