import React from 'react';
export default function Mapa() {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto w-full transition-opacity duration-500 "
      data-aos="fade-up"
      id="ubicacion"
    >
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.9639693264867!2d-65.61140922481619!3d-27.345594911429163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cf71aaa42153%3A0x4781750be79bfb7f!2sCaja%20Popular%202809%2C%20T4146%20Concepci%C3%B3n%2C%20Tucum%C3%A1n!5e0!3m2!1sen!2sar!4v1727120947583!5m2!1sen!2sar" 
      width="100%" 
      height="450" 
      style={{ border: '0' }} 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}
