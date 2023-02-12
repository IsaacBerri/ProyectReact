import { createContext, useContext, useState } from "react";

const contexto = createContext()
const Provider = contexto.Provider

export const useCarrito = () => {
    const valorContexto = useContext(contexto)
    return valorContexto
}

const CustomProvider = (props) => {

    const [productosCarrito, setProductosCarriro] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)
    const [unidades, setUnidades] = useState(0)
    const [total, setTotal] = useState(0)

    const agregarProductos = (producto, cantidad) => {
        const productoExistente = productosCarrito.findIndex((x) => x.id === producto.id)
        if (productoExistente === -1) {
            setProductosCarriro([ ...productosCarrito, producto])
            setUnidades(producto.rating.count = cantidad)
            setTotalProductos(totalProductos + cantidad)
        }else{
            setUnidades(producto.rating.count + cantidad)
            setTotalProductos(totalProductos + cantidad)
        }
    }
    const eliminarProducto = (producto) => {
        setProductosCarriro(productosCarrito.filter((x) => x.id !== producto.id))
        setTotalProductos(totalProductos - producto.rating.count)
    }
    const vaciarCarrito = () => {
        setProductosCarriro([])
        setTotalProductos(0)
    }

    const totalPrecio = setTimeout(() => {
            if (productosCarrito.length != 0) {
                const subtotales = productosCarrito.map((x) => x.price * x.rating.count)
                const totalProductos = subtotales.reduce((a, b) => a + b)
                setTotal(totalProductos)
            }
    }, 100);
    
    
    
    
    
    const valorProvider = {
        carrito: productosCarrito,
        totalProductos: totalProductos,
        setProductosCarriro: setProductosCarriro,
        setTotalProductos: setTotalProductos,
        agregarProductos: agregarProductos,
        eliminarProducto: eliminarProducto,
        total: total,
        totalPrecio: totalPrecio,
        vaciarCarrito: vaciarCarrito
    }


    return (
        <Provider value={valorProvider}>
            {props.children}
        </Provider>
    );
}

export default CustomProvider;