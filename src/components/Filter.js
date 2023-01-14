import Categorias from "./Categorias";

const Filter = () => {

    const categorias = document.querySelector(".categorias")

    function toggleCategorias() {
        categorias.classList.toggle("inactive")
    }


  return (
    <div className="filtro">
        <div>
          <label htmlFor="busqueda">Busqueda</label>
          <input type="text" id="busqueda"/>
        </div>
        <div>
            <button onClick={toggleCategorias}>Categoria</button>
        </div>
        <Categorias/>
    </div>
  )
}

export default Filter