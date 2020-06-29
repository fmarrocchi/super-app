import React from 'react';
import { Link } from 'react-router-dom';
import {Image, Segment, Button} from 'semantic-ui-react';
import Features from './../../Features';
import './Home.scss';

//images
import encasaImage from './../../../assets/images/paga.png';
import entregaImage from './../../../assets/images/entrega.png';
import productosImage from './../../../assets/images/productos.png';
import recetasImage from './../../../assets/images/recetas.png';
//icons
import iconRed from './../../../assets/icons/logo-red.png';
import voiceIcon from './../../../assets/icons/voice.png';
import barcodeIcon from './../../../assets/icons/barcode.png';

const features = [
  {
    name: "PAGAS EN CASA",
    description: "Te lo llevamos a la puerta de tu casa super fresco. Controlas el pedido y si esta todo bien, podes hacer el pago mediante efectivo, tarjeta (debito o credito) o Mercado Pago",
    urlImage: encasaImage
  },
  {
    name: "ENTREGA GRATIS",
    description: "Si tu pedido supera los $500.00, te lo llevamos gratis! Mirá nuestra amplia zona de cobertura y registrá más de una dirección y seleccioná donde queres que te lo entreguemos.",
    urlImage: entregaImage
  },
  {
    name: "PRODUCTOS FRESCOS",
    description: "Recibimos todos tus productos super frescos de los proveedores. Nuestras unidades móviles poseen heladeras asegurando una perfecta cadena de frío!",
    urlImage: productosImage
  },
  {
    name: "RECETAS DE COCINA",
    description: "Seleccionas una de nuestras recetas, y mediante un botón, subís los ingredientes a tu carrito. Podes marcar que cosas queres de tus marcas preferidas y listo! Ya estas listo para hacer tu receta con las cantidades exactas.",
    urlImage: recetasImage
  },
];
const searchFeatures = [
  {
    description: "Ya no es necesario escribir para buscar un producto. Presionas el icono del micrófono y podes buscar hablando. 'Yerba Playadito', 'Pañales Huggies', 'Caldos Knorr', 'Queso Cremoso'.",
    urlImage: voiceIcon
  },
  {
    description: "Si lo que necesitas es reponer tu shampoo o enjuague, andá hasta el baño y escanea el código de barras que tiene el envase. De esa manera tan rápida y simple vas a poder buscarlos sin temor a equivocarte. Nuestra nueva barra buscadora tiene un icono para comenzar a buscar por código de barra.",
    urlImage: barcodeIcon
  }
];

const Home = () =>{
  //ToDo agregar rayas  rojas a los costados de los titulos
  return (
    <div>
      <Segment textAlign='center'  className= "signContainer">            
            <Image className="signIcon" src={iconRed} centered size='medium' spaced />
            <div>
              <Link to="/login">
                <Button className="signInButton">Ingresar</Button>
              </Link>
            </div>
        </Segment>     
		
		  <Segment placeholder className="aboutUsContainer" textAlign='center' >
          <h3>SOBRE NOSOTROS </h3>  
          <p>
            Ir al super, no tiene nada de super. Mejor desde casa! Ahorrá tiempo y dinero comprando las mejores marcas desde la comodidad de tu sofá. Nosotros nos preocupamos por conseguir el mejor precio del mercado, seleccionar un catalogo con todos los productos que vos necesites y nos obesecionamos por llevaarlos a tiempo, frescos y a muy buen precio hasta tu casa. 
          </p>
      </Segment>

      <div className="featuresContainer">
        <Features features={features} />
      </div>

      <Segment placeholder className="searchContainer" textAlign='center' >
        <h3> BUSCAR ES MAS FACIL  </h3>
        <Features features={searchFeatures} />
      </Segment>
    </div>
  );
}
export default Home;