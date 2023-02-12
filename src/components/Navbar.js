import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function Navbar(props) {

  window.addEventListener('scroll', function () {
    const navBar = document.querySelector("nav")
    navBar.classList.toggle("scrollAbajo", window.scrollY>0)
  })
  if (props.isNavbar) {
    return (
      <nav className="barraNav">
        <div className="barraNav__contenedor">
          <img
            src="https://www.pngkey.com/png/full/130-1301739_ykle-parental-advisory-varsity-jacketparental-advisory-transparent-background.png"
            alt="logoNabvar"
            className="barraNav__logo"
          />
        
        <ul className="barraNav__lista">
          <Link to="/" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Inicio</li></Link>
          <Link to="/Productos" className="barraNav__link"><li className="barraNav__itemsDeLaLista">Productos</li></Link>
        </ul>
        </div>
        <CardWidget/>
      </nav>
    );
  } 
  else if(props.isFooter){
    return (
      <footer className="Footer">
        <div className="Footer__logo">
          <img
            src="https://www.pngkey.com/png/full/130-1301739_ykle-parental-advisory-varsity-jacketparental-advisory-transparent-background.png"
            alt="logoNabvar"
          />
        </div>
        <ul className="Footer__lista">
          <a href="https://github.com/IsaacBerri" className="Footer__link" target={"_blank"}><li className="Footer__itemsDeLaLista"><Icon icon="mdi:github" width="40" height="40"/></li></a>
          <a href="https://www.linkedin.com/in/isaac-berrio/" className="Footer__link" target={"_blank"}><li className="Footer__itemsDeLaLista"><Icon icon="mdi:linkedin" width="40" height="40"/></li></a>
          <a href="www.Twitter.com" className="Footer__link" target={"_blank"}><li className="Footer__itemsDeLaLista"><Icon icon="mdi:gmail" width="40" height="40"/></li></a>
        </ul>
      </footer>
    );
  }
}

export default Navbar;
