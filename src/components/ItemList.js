import Item from "./Item";

const ItemList = ({Productos}) => {
  return (
    <>
        {Productos.map((producto)=>{
          return (
            <Item Producto ={producto} key={producto.id}/>
          )
        })}
    </>
  );
};

export default ItemList;
