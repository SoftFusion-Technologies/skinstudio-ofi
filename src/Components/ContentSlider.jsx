import React, { useEffect, useState } from 'react';
import '../Styles/slider.css'; // Asegúrate de tener este archivo en la carpeta de estilos
import Cosmetica1 from '../Images/Slider/imagen3.webp';
import Imagen2 from '../Images/Slider/imagen2.webp';
import Imagen3 from '../Images/Slider/imgHeader.webp';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: Imagen3, alt: 'Imagen de cosmética 1' },
    { src: Imagen2, alt: 'Imagen de cosmética 2' },
    { src: Cosmetica1, alt: 'Imagen de cosmética 3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5500); // Cambia la imagen cada 5.5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.src})` }}
          aria-label={image.alt} // Añadido para accesibilidad
        >
          <div className="text-container">
            <h1>SKIN STUDIO</h1>
            <p>Descubre lo mejor en cosmetología y productos de belleza en nuestro estudio. Ofrecemos una gama completa de tratamientos personalizados y productos de alta calidad para realzar tu belleza natural.</p>
            <a href="#!" className="button uppercase">Conocer más</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
