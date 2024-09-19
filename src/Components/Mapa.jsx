import React from 'react';
export default function Mapa() {
  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row justify-center items-center mx-auto w-full transition-opacity duration-500 "
      data-aos="fade-up"
      id="ubicacion"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7099.340973373274!2d-65.497462!3d-27.166656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423cab5c7a01f6d%3A0x955344507c59c44d!2sCol%C3%B3n%2038%2C%20T4142%20Monteros%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1717859095275!5m2!1ses!2sar"
        width="100%"
        height="450"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
