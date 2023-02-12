import { collection, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [Products, setProducts] = useState({});
  const nombreURL = useParams();

  useEffect(() => {
    const coleccion = collection(db, "Productos")
    const filtro = doc(coleccion, nombreURL.id)
    const pedido = getDoc(filtro)
    pedido
    .then((respuesta) => {
      const producto = { ...respuesta.data(), id: respuesta.id}
      setProducts(producto)
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <section className="detallesDelProducto">
      <ItemDetail producto={Products}/>
    </section>
  );
};

export default ItemDetailContainer;
