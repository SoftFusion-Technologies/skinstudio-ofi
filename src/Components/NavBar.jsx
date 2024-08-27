import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaTimes, FaMapMarkerAlt, FaInstagram } from "react-icons/fa"; // Importa los íconos de mapa e Instagram
import { CiMenuFries } from "react-icons/ci";
import LogoMM from '../Images/logomm.jpg'
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

  const content = (
    <div
      className={`bg-white lg:hidden block absolute top-20 w-full left-0 right-0 transition`}
    >
      <ul className="text-center text-x1 p-20">
        <li className="my-4 py-4 border-b border-pink-300  hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="hero" onClick={handleClick}>
            INICIO
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-pink-300  hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="us" onClick={handleClick}>
            MAQUILLAJE
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-pink-300  hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="recipes" onClick={handleClick}>
            TIPS
          </Link>
        </li>
        <li className="my-4 py-4 border-b border-pink-300  hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="productos" onClick={handleClick}>
            PRODUCTOS
          </Link>
        </li>
        {/* Enlace para el mapa */}
        <li className="my-4 py-4 border-b border-pink-300  hover:text-white hover:rounded">
          <Link spy={true} smooth={true} to="mapas" onClick={handleClick}>
            <FaMapMarkerAlt className="inline-block mr-2" />
            UBICACIÓN
          </Link>
        </li>
        {/* Enlace para Instagram */}
        <li className="my-4 py-4 border-b border-pink-300  hover:text-white hover:rounded">
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
          <div className="flex flex-col items-center -mt-5">
            <span role="img" aria-label="crown" className="text-5xl mb-2">
              👑
            </span>
            <div className="text-3xl font-extrabold text-pink-600 mb-1">Mica Molina</div>
            <div className="text-md text-gray-600">Cosmetóloga & Make Up</div>
          </div>
        </div>
        <div className="hidden sm:flex sm:mr-5 lg:flex md:flex lg:flex-1 items-center justify-end font-medium">
          <div className="flex items-center">
            <ul className="flex gap-8 sm:mx-auto md:mr-16 lg:mr-16 text-lg">
              <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <Link spy={true} smooth={true} to="hero">
                  INICIO
                </Link>
              </li>
              <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <Link spy={true} smooth={true} to="us">
                  MAQUILLAJE
                </Link>
              </li>
              <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <Link spy={true} smooth={true} to="recipes">
                  TIPS
                </Link>
              </li>
              <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <Link spy={true} smooth={true} to="productos">
                  PRODUCTOS
                </Link>
              </li>
              <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <Link spy={true} smooth={true} to="mapas">
                  <FaMapMarkerAlt className="inline-block mr-2" />
                  UBICACIÓN
                </Link>
              </li>
              <li className="transition border-b-2 border-transparent hover:border-pink-500 cursor-pointer">
                <a
                  href="https://www.instagram.com/mm.skinstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="inline-block mr-2" />
                  INSTAGRAM
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button
          className="block sm:hidden transition m-4 p-2 rounded-lg"
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
