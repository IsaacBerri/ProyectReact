import React from "react";
import { Link } from "react-router-dom";

const Item = ({ Producto }) => {
  return (
    <article key={Producto.id} className="producto">
      <div className="imgProducto">
        <img src={Producto.image} alt="" />
      </div>
      <div className="infoProducto">
        <h3>{Producto.title}</h3>
        <p>$ {Producto.price}</p>
        <Link to={"/Item/" + Producto.id}>Detalles</Link>
      </div>
    </article>
  );
};

export default Item;
