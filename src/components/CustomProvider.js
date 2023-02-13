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
    const [unidades, setUnidades] = useState([])
    const [total, setTotal] = useState(0)
    console.log(unidades);

    const agregarProductos = (producto, cantidad) => {
        const productoExistente = productosCarrito.findIndex((x) => x.id === producto.id)
        if (productoExistente === -1) {
            setProductosCarriro([ ...productosCarrito, producto])
            setUnidades([...unidades, cantidad])
            setTotalProductos(totalProductos + cantidad)
        }else{
            setUnidades(productosCarrito.map((x, index) => unidades[index] + cantidad))
            setTotalProductos(totalProductos + cantidad)
        }
    }
    const eliminarProducto = (producto) => {
        setProductosCarriro(productosCarrito.filter((x) => x.id !== producto.id))
        const posicionProducto = productosCarrito.findIndex((x) => {
            return x.id === producto.id
        })
        const unidadesAEliminar = unidades.splice(posicionProducto, 1)
        setTotalProductos(totalProductos - unidadesAEliminar)
        setUnidades(unidades)
    }
    const vaciarCarrito = () => {
        setProductosCarriro([])
        setTotalProductos(0)
        setUnidades([])
    }

    
        setTimeout(() => {
            if (productosCarrito.length != 0) {
                const subtotales = productosCarrito.map((x, index) => x.price * unidades[index])
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
        unidades: unidades,
        total: total,
        totalPrecio: setTimeout,
        vaciarCarrito: vaciarCarrito
    }


    return (
        <Provider value={valorProvider}>
            {props.children}
        </Provider>
    );
}

export default CustomProvider;