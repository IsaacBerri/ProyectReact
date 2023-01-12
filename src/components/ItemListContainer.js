import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [Products, setProducts] = useState([])
  
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(respuesta => respuesta.json())
    .then(productos => {
      console.log(productos)
      setProducts(productos)
    })

  },[])
  
  return (
    <div className="containerProductos">
        <ItemList Productos ={Products}/>
    </div>
  )
}

export default ItemListContainer