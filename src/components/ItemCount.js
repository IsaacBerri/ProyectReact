import { useState } from "react"


const ItemCount = (props) => {

  const [Contador, setContador] = useState(1)

  if (Contador === props.stock) {
    alert("Es el maximo de unidades que tenemos de este producto")
  }

  const handleSumar = () => {
    if (Contador < props.stock) {
      setContador(Contador + 1)
    }
  }
  const handleRestar = () => {
    if (Contador > 1) {
        setContador(Contador - 1)
    }
  }

  const handleReset = () => {
    setContador(1)
  }

  const handelConfirmar = () => {
    props.onAdd(Contador)
  }

  return (
    <div className="containerCount">
        <label htmlFor="contador">Unidades</label>
        <p id="contador">{Contador}</p>
        <button onClick={handleSumar}>+</button>
        <button onClick={handleRestar}>-</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handelConfirmar}>Comprar</button>
    </div>
  )
}

export default ItemCount