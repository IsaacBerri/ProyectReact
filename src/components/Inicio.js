import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Inicio = () => {
  return (
    <>
      <div className="videoIndex">
      <video src=".././video/pexels-kindel-media-6994619.mp4" autoPlay muted loop></video>
      <h1>Tienda online</h1>
      <h2>"Compra con <span>confianza</span> en nuestra tienda en línea"</h2>
      </div>
    </>
  );
};

export default Inicio;
