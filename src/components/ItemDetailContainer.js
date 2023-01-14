import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import CardWidget from "./CardWidget";

const ItemDetailContainer = () => {
  const [Products, setProducts] = useState({});
  const nombreURL = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + nombreURL.id)
      .then((respuesta) => respuesta.json())
      .then((productos) => {
        setProducts(productos);
      });
  }, []);

  // const rate = Products
  // console.log(rate);

  return (
    <section className="detallesDelProducto">
      <div className="irAtras">
        <Link to={"/Productos"}>
          <Icon
            icon="material-symbols:arrow-back-ios-new"
            width="60"
            height="60"
          />
        </Link>
        <CardWidget />
      </div>
      <div className="containerInfo">
        <div className="infoDelProducto">
          <h3 id="infoTitle">{Products.title}</h3>
          <img src={Products.image} alt={Products.title} id="infoImg" />
        </div>
        <div className="infoSecundaria">
          <p id="infoCategory">{Products.category}</p>
          <p id="infoDescription">{Products.description}</p>
          <p id="infoPrice">$ {Products.price}</p>
        </div>
      </div>
    </section>
  );
};

export default ItemDetailContainer;
