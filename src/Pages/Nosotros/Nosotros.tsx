import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FNosotros from "./assets/fNosotros.jpg";
import Slider1 from "./assets/Slider1.jpg";
import Slider2 from "./assets/Slider2.jpg";
import Slider3 from "./assets/Slider3.jpg";

function Nosotros() {
   // Configuración para el carrusel
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  
  return (
    <div className="w-full">
      <Header />
      <div className="relative w-full h-64 md:h-80">
        <Slider {...settings}>
              <div>
                <img
                  src={Slider1}
                  alt="Slider 1"
                  className="w-full h-64 md:h-80 object-cover shadow-lg"
                />
              </div>
              <div>
                <img
                  src={Slider2}
                  alt="Slider 2"
                  className="w-full h-64 md:h-80 object-cover shadow-lg"
                />
              </div>
              <div>
                <img
                  src={Slider3}
                  alt="Slider 3"
                  className="w-full h-64 md:h-80 object-cover shadow-lg"
                />
              </div>
          </Slider>
          <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start bg-black bg-opacity-50 px-4">
            <div className="mt-4 md:absolute md:bottom-5 mb-5 md:left-10"></div>
          </div>
      </div>

      <div className="mt-6 p-5">
        <h2 className="text-2xl md:text-4xl bg-gray-300 p-5 font-bold text-center md:text-left">
          ¿Quiénes <span className="text-green-500">somos</span>?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div>
            <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
              Somos un equipo apasionado, el cual, empodera a desarrolladores, estudiantes y empresas a tomar decisiones informadas
              sobre las <span className="text-green-500 font-bold">herramientas </span> que impulsan el futuro digital y cubran sus necesidades. 
            </p>
            <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
              Creemos que el <span className="text-green-500 font-bold">conocimiento</span> colaborativo
              transforma ideas en soluciones poderosas, por lo que hemos creado un espacio donde la <span className="text-green-500 font-bold">comunidad</span> tecnológica comparte,
              evalúa y debate sobre tecnologías de frontend, backend y full stack.
            </p>
            <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
              Nuestra misión es ser la guía confiable que conecta la <span className="text-green-500 font-bold">experiencia</span> de expertos con las aspiraciones de quienes están
              iniciando su camino, garantizando calidad, claridad y una experiencia enriquecedora para todos nuestros usuarios.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <img
              src={FNosotros}
              alt="Nosotros"
              className="w-3/4 h-40 md:h-48 object-cover rounded shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nosotros;
