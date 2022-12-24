import CardWidget from "./CardWidget";

function Navbar(props) {
  let menuNavbar = ["Inicio", "Nosotros", "Ubicacion", "Contacto"];
  let menuFooter = ["Facebook", "Instagram", "Twiteer"];
  if (props.isNavbar) {
    return (
      <nav className="barraNav">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/076/592/original/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"
            alt="logoNabvar"
            className="barraNav__logo"
          />
        </div>
        <ul className="barraNav__lista">
          {menuNavbar.map((el, index) => (
            <a href="#" key={index} className="barraNav__link"><li className="barraNav__itemsDeLaLista">{el}</li></a>
          ))}
        </ul>
        <CardWidget/>
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
          {menuFooter.map((el, index) => (
            <a href="#" key={index} className="Footer__link"><li className="Footer__itemsDeLaLista">{el}</li></a>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
