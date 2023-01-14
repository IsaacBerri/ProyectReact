import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Filter from "./Filter";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [Products, setProducts] = useState([])
  
  const nameURL = useParams()

  useEffect(()=>{
    if(nameURL.category === undefined) {
      fetch("https://fakestoreapi.com/products")
      .then(respuesta => respuesta.json())
      .then(productos => {
        console.log(productos)
        setProducts(productos)
      })
    } else {
      fetch("https://fakestoreapi.com/products/category/" + nameURL.category)
      .then(respuesta => respuesta.json())
      .then(productos => {
        console.log(productos)
        setProducts(productos)
      })
    }
  },[useParams()])

  
  return (
    <>
    <Filter/>
    <div className="containerProductos">
        <ItemList Productos ={Products}/>
    </div>
    </>
  )
}

export default ItemListContainer