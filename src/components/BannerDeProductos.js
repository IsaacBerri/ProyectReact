import Filter from "./Filter"

const BannerDeProductos = () => {
  return (
    <div className="infoPrincipalDeProductos">
        <div className="containerTextoInfoProductos">
            <h3>Tienda Online</h3>
            <p>¡Ven y descubre los mejores productos en nuestra tienda! Desde ropa hasta electrónica, tenemos todo lo que necesitas para mejorar tu estilo de vida.</p>
            <Filter/>
        </div>
        
        <div className="containerImgCamisa">
            <img src="https://i.imgur.com/phpjFHu.png" alt="" />
        </div>
    </div>
  )
}

export default BannerDeProductos