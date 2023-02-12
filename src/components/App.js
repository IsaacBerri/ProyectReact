import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./CustomProvider";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Navbar isNavbar={true} />
        <Main />
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
