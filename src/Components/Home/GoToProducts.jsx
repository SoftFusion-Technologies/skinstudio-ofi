import {useNavigate} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


const ProductLink = () =>{
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/productos');
    };

    return (
      <div
        data-aos="flip-up"
        className="p-4 mb-10 bg-transparent flex justify-center max-w-screen-lg mx-auto"
      >
        <div className="p-4  w-full bg-gradient-to-r from-pink-200 to-white rounded-lg shadow-gray-300 shadow-xl">
          <div className="pt-6">
            <h1 className="text-pink-400 text-6xl font-semibold text-center">
              Conocé Nuestros Productos
            </h1>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-pink-400 text-white font-semibold rounded-lg mb-4 p-2 mt-4 
        transition duration-200 hover:bg-pink-500 flex items-center
        transform hover:scale-110"
              onClick={handleClick}
            >
              Ir a Productos
              <FaArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
          <div className="flex justify-center mt-2">
            <h2 className="text-pink-400 text-center text-lg">
              Cosmética Natural. Carecen de toxicidad, parabenos y perfumes
              artificiales. Cruelty Free. Libres de gluten.
            </h2>
          </div>
        </div>
      </div>
    );
};

export default ProductLink;  

