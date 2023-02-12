import Categorias from "./Categorias";

const Filter = () => {
  const categorias = document.querySelector(".categorias");

  function toggleCategorias() {
    categorias.classList.toggle("inactive");
  }

  return (
    <>
      <button onClick={toggleCategorias}>Categorias</button>
      <Categorias />
    </>
  );
};

export default Filter;
