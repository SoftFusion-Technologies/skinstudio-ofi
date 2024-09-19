import {useNavigate} from "react-router-dom";
import {FaInstagram, FaWhatsapp} from "react-icons/fa";
import PLocion from '../../Images/QuienSoy/PLocion.webp';

const ContactSection = () => {
        const navigate = useNavigate();

        const handleVolver = () =>{
            navigate (-1);
        };

        return (
            <div className="p-12 mb-4">
            {/* <h1 className="ml-1 text-3xl font-bold text-pink-500 mb-4">Contacto</h1> */}
            <div className='relative min-h-[600px] bg-cover bg-center rounded-lg overflow-hidden' 
             style={{backgroundImage: `url(${PLocion})`}}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
                    <h2 className="text-white text-center text-5xl font-bold mb-4">
                        ¿Cómo te ayudo?
                    </h2>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.instagram.com/mm.skinstudio/"
                            className="text-white mt-4 transform transition-transform duration-300 hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                         <FaInstagram size={36} />
                        </a>
                        <a
                            href="https://wa.me/3865213958"
                            className="text-white mt-4 transform transition-transform duration-300 hover:scale-110 "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                         <FaWhatsapp size={36} 
                                     className="mr-1" 
                         />
                        </a>
                    </div>
                </div>
            </div>
            <button 
                onClick={handleVolver}
                className="absolute mb-4 mt-4 left-12 bg-pink-500 text-white font-bold py-2 px-4 rounded-lg shadow-md
                 hover:bg-pink-600 transition duration-300">
                Volver
            </button>
            </div>        
        );
    }

export default ContactSection;