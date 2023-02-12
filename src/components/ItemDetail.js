import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { Icon } from "@iconify/react";
import { useCarrito } from "./CustomProvider";

const ItemDetail = ({ producto }) => {
  const { title, category, image, description, price, rating } = producto;
  const { agregarProductos, totalPrecio } = useCarrito();

  const onAdd = (productosIngresados) => {
    setCantidad(productosIngresados);

    setConfirmado(true);
  };

  const [confirmado, setConfirmado] = useState(false);
  const [cantidad, setCantidad] = useState(0);
  const [otros, setOtros] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const { rate, count } = rating;
      setOtros([rate, count]);
    }, 100);
  }, [producto]);

  const handleAgergar = () => {
    agregarProductos(producto, cantidad);
    totalPrecio()
  };
  return (
    <div className="containerInfo">
      <div className="infoDelProducto">
        <section className="section1">
          <img src={image} alt={title} id="infoImg" />
        </section>
        <section className="section2">
          <h3 id="infoTitle">{title}</h3>
          <p id="infoCategory">{category}</p>
          <p id="infoRate">
            <Icon
              icon="material-symbols:star-half"
              color="black"
              width="40"
              height="40"
            />
            {otros[0]}
          </p>
          <p id="infoPrice">$ {price}</p>
          <ItemCount stock={otros[1]} onAdd={onAdd} />
          {confirmado && (
            <button onClick={handleAgergar} id="buttonComprar" >Agregar al carrito</button>
          )}
          <p id="infoDescription">{description}</p>
        </section>
      </div>
    </div>
  );
};

export default ItemDetail;
