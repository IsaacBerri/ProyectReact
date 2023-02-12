import { collection, getDocs, where, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import BannerDeProductos from "./BannerDeProductos";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = () => {
  const [Products, setProducts] = useState([]);
  const [loadPorducts, setLoadProducts] = useState(false);

  const nameURL = useParams();

  useEffect(() => {
    if (nameURL.category === undefined) {
      const coleccion = collection(db, "Productos");
      const pedido = getDocs(coleccion);
      pedido
        .then((respuesta) => {
          const productos = respuesta.docs.map((producto) => ({
            ...producto.data(),
            id: producto.id,
          }));
          setProducts(productos);
          setLoadProducts(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }else {
      const coleccion = collection(db, "Productos");
      const filtro = query(coleccion, where("category", "==", nameURL.category))
      const pedido = getDocs(filtro);
      pedido
        .then((respuesta) => {
          const productos = respuesta.docs.map((producto) => ({
            ...producto.data(),
            id: producto.id,
          }));
          setProducts(productos);
          setLoadProducts(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [nameURL.category]);

  return (
    <>
      <BannerDeProductos />
      <div className="containerProductos">
        {loadPorducts ? <ItemList Productos={Products} /> : <Loader />}
      </div>
    </>
  );
};

export default ItemListContainer;
