import React from 'react';
import whatsappIcon from '../Images/LogoRosaBN.svg';
function WhatsappBut() {

 const handleClick = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado de <a>
    
    // Abrir las páginas con un pequeño retraso
    window.open('https://www.instagram.com/softfusiontechnologies/1', '_blank');
    setTimeout(() => window.open('https://api.whatsapp.com/send?phone=3863531891', '_blank'), 2500);
    setTimeout(() => window.open('https://softfusion.com.ar/', '_blank'), 2500); 
  };
    return (
      <div className="fixed bottom-20 right-7 z-50 animate-bounce">
        <a
          // href="#"
               href="#"
            onClick={handleClick}
            target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-16 h-16" />
        </a>
      </div>
    );
  }
  
  export default WhatsappBut;