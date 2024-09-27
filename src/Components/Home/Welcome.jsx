import React from 'react';

const Welcome = () => {
  return (
    <div className="text-container text-black font-bold rounded-md">
      <h1>SKIN STUDIO</h1>
      <p className="font-serif">
        Descubrí lo mejor en cosmetología y productos de belleza en nuestro
        estudio. Ofrecemos una gama completa de tratamientos personalizados y
        productos de alta calidad para realzar tu belleza natural.
      </p>
      <button
        onClick={() => {
          const section = document.getElementById('us');
          section.scrollIntoView({ behavior: 'smooth' });
        }}
        className="buttonHome"
      >
        CONOCER MÁS
      </button>
    </div>
  );
};

export default Welcome;
