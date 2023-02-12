import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import { useCarrito } from "./CustomProvider";

const Checkout = () => {
  const [Nombre, setNombre] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Email, setEmail] = useState("");
  const [Direccion, setDireccion] = useState("");
  const [Depto, setDepto] = useState("");
  const [CodigoPostal, setCodigoPostal] = useState("");
  const [Provincia, setProvincia] = useState("");
  const [Localidad, setLocalidad] = useState("");

  const { carrito } = useCarrito();

  const handleVenta = () => {
    const venta = {
        Usuario : {
            Nombre : Nombre,
            Telefono : Telefono,
            Email : Email,
            Direccion : Direccion,
            Depto : Depto,
            CodigoPostal : CodigoPostal,
            Provincia : Provincia,
            Localidad : Localidad
        },
        Productos : carrito,
        fecha: serverTimestamp()
    }

    const ventasCollection = collection(db, "Ventas")
    const pedido = addDoc(ventasCollection, venta)

    pedido
    .then((respuesta) => {
       console.log(respuesta);
    })
    .catch((err) => {
        console.log(err);
    })
  };

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleTelefono = (e) => {
    setTelefono(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleDirecion = (e) => {
    setDireccion(e.target.value);
  };

  const handleDepto = (e) => {
    setDepto(e.target.value);
  };

  const handleCodigoPostal = (e) => {
    setCodigoPostal(e.target.value);
  };

  const handleProvincia = (e) => {
    setProvincia(e.target.value);
  };
  const handleLocalidad = (e) => {
    setLocalidad(e.target.value);
  };

  return (
    <div className="containerCheckout">
      <p>Datos Personales</p>
      <div className="formularioCkeckout">
        <label htmlFor="Nombre">Nombre Completo</label>
        <input type="text" id="Nombre" onChange={handleNombre} />
        <label htmlFor="Telefono">Telefono</label>
        <input type="number" id="Telefono" onChange={handleTelefono} />
        <label htmlFor="Email">Email</label>
        <input type="email" id="Email" onChange={handleEmail} />
        <div className="row">
          <div className="colum1">
            <label htmlFor="Direccion">Dirección</label>
            <input type="text" id="Direccion" onChange={handleDirecion} />
            <label htmlFor="Depto">Piso / Depto</label>
            <input type="text" id="Depto" onChange={handleDepto} />
            <label htmlFor="CodigoPostal">Codigo Postal</label>
            <input
              type="number"
              id="CodigoPostal"
              onChange={handleCodigoPostal}
            />
          </div>
          <div className="colum2">
            <label htmlFor="Provincia">Provincia</label>
            <input type="text" id="Provincia" onChange={handleProvincia} />
            <label htmlFor="Localidad">Localidad</label>
            <input type="text" id="Localidad" onChange={handleLocalidad} />
          </div>
        </div>
        <button onClick={handleVenta}>Finalizar Compra</button>
        <button>Cancelar</button>
      </div>
    </div>
  );
};

export default Checkout;
