import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaArrowUp} from "react-icons/fa"
import { Link } from 'react-router-dom';
const Footer = () => {


    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };
    return (
        <footer className="bg-transparent text-pink-300 py-8">
            <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-lg"
            /*className="flex flex-col space-y-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-lg"*/>
                <h2 className="text-2xl font-roboto font-bold text-center"></h2>
                {/*Nuestras Redes*/}
                <div className="flex flex-col items-center p-8">
                    <h1 className="text-3xl font-bold text-pink-300">SKIN STUDIO</h1>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-pink-300 hover:text-pink-400"><FaFacebook size={24} /></a>
                        <a href="https://www.instagram.com/mm.skinstudio/" 
                           className="text-pink-300 hover:text-pink-400"
                           target="_blank" 
                           rel="noopener noreferrer" 
                        >
                           <FaInstagram size={24} /></a>
                        <a href="#" className="text-pink-300 hover:text-pink-400"><FaTiktok size={24} /></a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-18">
                {/*Links */}
                <div className="flex flex-col items-center">
                    <h2 className="text-lg font-bold text-pink-300">CATEGORÍAS</h2>
                    <nav id="link-list__footer" className="flex space-x-4 mt-4">
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-pink-300 hover:underline hover:text-pink-400">Ofertas</a>
                            </li>
                            <li>
                                <a href="#" className="text-pink-300 hover:underline hover:text-pink-400">Maquillaje</a>
                            </li>
                            <li>
                                <Link to="/skintest" className="text-pink-300 hover:underline hover:text-pink-400">Skin Test</Link>
                            </li>
                            <li>
                                <a href="#" className="text-pink-300 hover:underline hover:text-pink-400">Accesorios</a>
                            </li>
                            <li>
                                <a href="#" className="text-pink-300 hover:underline hover:text-pink-400">Gift Cards</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col items-center">
                        <h2 className="text-lg font-bold text-pink-300 mb-4">EXPLORA MÁS</h2>
                        <nav id="link-list__footer">
                            <ul className="space-y-2 text-center">
                                <li><a href="#" className="text-pink-300 hover:underline hover:text-pink-400">Blog de belleza</a></li>
                                <li><a href="#" className="text-pink-300 hover:underline hover:text-pink-400">Quiénes Somos</a></li>
                                <li><a href="#" className="text-pink-300 hover:underline hover:text-pink-400">Cuidados</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-lg font-bold text-pink-300 mb-4">CONTACTÁNOS</h2>
                        <nav id="link-list__footer">
                            <ul className="space-y-2 text-center items-center">
                                <li><a href="https://wa.me/3865213958" 
                                       className="text-pink-300 hover:text-pink-400 flex items-center"
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        <FaWhatsapp size={24} 
                                                    className="mr-1" 
                                        />
                                        3865 21-3958
                                    </a>
                                </li>
                                <li><a href="mailto:skincare@gmail.com" 
                                       className="text-pink-300 hover:text-pink-400">skincare@gmail.com
                                    </a>
                                </li>       
                            </ul>
                        </nav>
                    </div>
                    </div>
                <div className="footer-bottom p-4 text-center">
                    <span>
                         <a className="text-gray-400 " href="https://softfusion.com.ar/" target="_blank">
                             © 2024 SoftFusion. All rights reserved.
                         </a>
                    </span>
                </div>
            </div>
                <button className="fixed bottom-10 right-10 bg-pink-200 text-white p-2 rounded-full shadow-md hover:bg-pink-300 hover:shadow-lg transition duration-300"
                    onClick={scrollToTop}
                >
                    <FaArrowUp className="text-xl" />
                </button>
        </footer>
    );
}

export default Footer;

