import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {Link as RouterLink} from "react-router-dom";
import { FaTimes, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const CustomLink = ({ to, isScroll, children, onClick }) => {
  if (isScroll) {
    return (
      <ScrollLink
        to={to}
        spy={true}
        smooth={true}
        onClick={onClick}
        className="cursor-pointer"
      >
        {children}
      </ScrollLink>
    );
  }

  return (
    <RouterLink to={to} onClick={onClick} className="cursor-pointer">
      {children}
    </RouterLink>
  );
};

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToLocation = () => {
    document.getElementById('ubicacion').scrollIntoView({
      behavior: 'smooth', // Desplazamiento suave
      block: 'start' // Alinea el inicio del elemento con la parte superior de la vista
    });
  };

  const content = (
    <div
      className={`mt-12 bg-white lg:hidden block absolute top-16 left-0 right-0 transition z-50`} // Añadido z-50
    >
      <ul className="text-center text-xl p-8">
        <li className="my-4 py-4 border-b border-pink-300 hover:text-white hover:rounded">
          <CustomLink to="/" isScroll={false} onClick={handleClick}>
            INICIO
          </CustomLink>
        </li>
        {/* <li className="my-4 py-4 border-b border-pink-300 hover:text-white hover:rounded">
          <CustomLink to="maquillaje" isScroll={true} onClick={handleClick}>
            MAQUILLAJE
          </CustomLink>
        </li> */}
        <li className="my-4 py-4 border-b border-pink-300 hover:text-white hover:rounded">
          <CustomLink to="/skintest" isScroll={false} onClick={handleClick}>
            SKIN TEST
          </CustomLink>
        </li>
        <li className="my-4 py-4 border-b border-pink-300 hover:text-white hover:rounded">
          <CustomLink to="/productos" isScroll={false} onClick={handleClick}>
            PRODUCTOS
          </CustomLink>
        </li>
        <li className="my-4 py-4 border-b border-pink-300 hover:text-white hover:rounded">
          <CustomLink to="/contacto" isScroll={false} onClick={handleClick}>
            CONTACTO
          </CustomLink>
        </li>
        <li className="my-4 py-4 border-b border-pink-300 hover:text-white hover:rounded">
          <p
            className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer"
            onClick={scrollToLocation}
          >
            UBICACIÓN
          </p>
        </li>
        <li className="my-4 py-4 border-b border-pink-300 hover:text-white hover:rounded">
          <a
            href="https://www.instagram.com/mm.skinstudio/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            <FaInstagram className="inline-block mr-2" />
            INSTAGRAM
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className={`bg-${scrolling ? 'white' : 'transparent'} shadow-md`}>
      <div className="h-10vh flex justify-between items-center z-50 text-pink-600 lg:py-5 lg:px-20 py-4 px-4">
        <div className="flex items-center flex-1">
          <a href="/">
            <div className="flex flex-col items-center -mt-5">
              <span role="img" aria-label="crown" className="text-5xl mb-2">
                👑
              </span>
              <div className="text-3xl font-extrabold text-pink-600 mb-1">
                Mica Molina
              </div>
              <div className="text-md text-gray-600">Cosmetóloga & Make Up</div>
            </div>
          </a>
        </div>
        <div className="hidden sm:flex sm:mr-5 lg:flex md:flex lg:flex-1 items-center justify-end font-medium">
          <div className="flex items-center">
            <ul className="flex gap-8 sm:mx-auto md:mr-16 lg:mr-16 text-lg">
              {/* <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <CustomLink to="/" isScroll={false}>
                  INICIO
                </CustomLink>
              </li> */}
              <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <CustomLink to="/productos" isScroll={false}>
                  PRODUCTOS
                </CustomLink>
              </li>

              <li className="transition border-b-2 border-transparent whitespace-nowrap hover:border-pink-500 cursor-pointer">
                <CustomLink to="/skintest" isScroll={false}>
                  SKIN TEST
                </CustomLink>
              </li>

              {/* <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <CustomLink to="maquillaje" isScroll={true}>
                  MAQUILLAJE
                </CustomLink>
              </li> */}
              <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <CustomLink to="/contacto" isScroll={false}>
                  CONTACTO
                </CustomLink>
              </li>
              {/* 
               <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <CustomLink
                  to="mapas"
                  isScroll={true}
                  className="flex items-center"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  <span>UBICACIÓN</span>
                </CustomLink>
              </li> */}

              <li className="flex items-center transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <a
                  href="https://www.instagram.com/mm.skinstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaInstagram className="mr-2" />
                  <span>INSTAGRAM</span>
                </a>
              </li>

              <li
                className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer"
                onClick={scrollToLocation}
              >
                UBICACIÓN
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transition m-4 p-2 rounded-lg z-50" // Añadido z-50
          onClick={handleClick}
        >
          {click ? (
            <FaTimes className="text-2xl text-black" />
          ) : (
            <CiMenuFries className="text-2xl text-black" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
