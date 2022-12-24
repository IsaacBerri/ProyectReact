import Navbar from "./Navbar";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";


function App() {
  return (
    <>
      <Navbar isNavbar={true}/>
      <Main/>
      <ItemListContainer greeting="Nueva tienda gamer"/>
      <Footer/>
    </>
  );
}

export default App;
