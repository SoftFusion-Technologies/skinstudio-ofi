import React, { useState, useEffect } from "react";
import { carrusel1, carrusel2, carrusel3, carrusel4, carrusel5 } from "../../Images";
import '../../Styles/aboutMe.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const AboutMe = () => {
  const images = [carrusel1, carrusel2, carrusel3, carrusel4, carrusel5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return ( 
    <section
      className="flex flex-col mt-40 mb-40 w-5/6 mx-auto lg:flex-row lg:space-x-10 bg-transparent"
      id="us"
      data-aos="fade-right"
    >
      
      <div className="w-full md:w-1/2 md:mx-auto">
        <h1
          className="h1-about text-4xl font-montserrat text-pink-500"
          data-aos="fade-down"
        >
          ¿QUIÉN SOY y QUÉ ES AURA?
        </h1>
        <p className="p-about pt-5 text-[17px] font-serif" data-aos="fade-up">
          Mi nombre es Micaela,soy <strong> cosmiatra y maquilladora.</strong>
          { ' '}Es un placer poder empezar a compartir mi trabajo.
          <br />
          Me concentro en la propuesta de tratamientos con{' '}
          <strong>productos naturales</strong> compatibles con rutinas
          específicas para todo tipo de piel. ✨ Te podré asesorar y recomendar
          lo que tu piel necesite específicamente. 👌🏼 ✨ Disfruto mucho de
          maquillar y hacer sentir a las mujeres más bellas aún!.
          <br />
          <strong>AURA</strong> es mi propia marca de SkinCare.¡Porque Aura?{' '}
          <strong>AURA</strong>: Por definición es la energía positiva que
          transmiten los seres humanos y esto para mí es muy significativo Cada
          vez que entras en contacto con mis cremas tenés la sensación de
          bienestar y yo también la tengo al acompañarte en tu proceso del
          cuidado de la piel Así hacemos crecer juntos esta comunidad que cada
          día elija aura Logrando esta conexión emocional de buena vibra juntos!
        </p>
      </div>
      <div
        className="w-full pt-14 lg:p-0 bg-center sm:pt-14 md:w-1/2 lg:w-1/2 lg:mx-auto md:mx-auto flex items-center justify-center"
        data-aos="fade-up"
      >
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          <div className="relative h-64 sm:h-64 w-full md:w-[85%] lg:w-[70%] mx-auto overflow-hidden rounded-lg md:h-[350px]">
            {images.map((image, index) => (
              <div
                key={index}
                className="absolute w-full h-full top-0 left-0 opacity-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: index === currentImageIndex ? 1 : 0 }}
              >
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt={`Imagen ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      );
};

export default AboutMe;
