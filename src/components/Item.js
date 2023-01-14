import React from "react";
import { Link } from "react-router-dom";

const Item = ({Producto}) => {
  return (
    <article key={Producto.id} className="producto">
      <img src={Producto.image} alt="" />
      <h3>{Producto.title}</h3>
      <p>$ {Producto.price}</p>
      <Link to={"/Item/" + Producto.id}>Detalles</Link>
    </article>
  );
};

export default Item;
