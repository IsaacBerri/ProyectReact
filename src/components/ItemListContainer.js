import { useState } from "react"

const ItemListContainer = (prop) => {

  const [Contador, setCotador] = useState(0)

  const eventoSuma = () => {
    setCotador(Contador + 1)
  }
  const eventoBorrar = () => {
    setCotador(0)
  }


  return (
    <div>
        <h2>{prop.greeting}</h2>
        <p>Conatdor: {Contador}</p>
        <button onClick={eventoSuma}>Sumar</button>
        <button onClick={eventoBorrar} >Borrar</button>
    </div>
  )
}

export default ItemListContainer