import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar isNavbar={true}/>
      <Main/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
