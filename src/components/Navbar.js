import CardWidget from "./CardWidget";
import Carrito from "./Carrito";
import { Link } from "react-router-dom";

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
          <Link to="/" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Inicio</li></Link>
          <Link to="/Nosotros" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Nosotros</li></Link>
          <Link to="/Productos" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Productos</li></Link>
          <Link to="/Ubicacion" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Ubicacion</li></Link>
          <Link to="/Contacto" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Contacto</li></Link>
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
          <Link to="www.facebook.com" className="Footer__link"><li className="Footer__itemsDeLaLista">Facebook</li></Link>
          <Link to="www.instagram.com" className="Footer__link"><li className="Footer__itemsDeLaLista">Instagram</li></Link>
          <Link to="www.Twitter.com" className="Footer__link"><li className="Footer__itemsDeLaLista">Twitter</li></Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
