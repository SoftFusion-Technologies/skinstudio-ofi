import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft } from 'react-icons/fa';
import piel1 from '../../Images/SkinTest/piel1.webp'
import piel2 from '../../Images/SkinTest/piel2.webp'
import piel3 from '../../Images/SkinTest/piel3.webp'
import piel4 from '../../Images/SkinTest/piel4.webp'
import piel5 from '../../Images/SkinTest/piel5.webp'
import piel6 from '../../Images/SkinTest/piel6.webp'
import AguaMicelar from '../../Images/Products/Locion/AguaMicelar.webp'
import LocionAc from '../../Images/Products/Locion/LocionAc.webp'
import LocionAc2 from '../../Images/Products/Locion/LocionAc2.webp'
import PGel4 from '../../Images/Products/Gel/PGel4.webp'
import PCrema2 from '../../Images/Products/Cremas/PCrema2.webp'
import PSerum1 from '../../Images/Products/Serum/PSerum1.webp'
import PGelLimp3 from '../../Images/Products/Gel/PgelLimp3.webp'

const TestSlider = () => {
  const navigate = useNavigate();  
  const [step, setStep] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    age: null,
    skinType: null,
    skinAppearance: null,
    mainConcern: null,
  });
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const handleStart = () => {
    setStep(prevStep => prevStep + 1);
  };


  const handleBack = () => {
    if (step === 1) {
      navigate(-1); // Vuelve a la pagina anterior
    } else {
      setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep)); //Volver al paso anterior
    }
  };

  const productosRecomendados = [
    { id: 1, src: AguaMicelar, alt: "Agua Micelar", text: "Paso 1: Limpieza", description: "Agua Micelar", category: 'limpieza' },
    { id: 2, src: LocionAc, alt: "LocionAc", text: "Paso 2: Tratamiento", description: "Locion Ácido Salisílico", category: 'tratamiento' },
    { id: 3, src: LocionAc2, alt: "Loción AC2", text: "Paso 2: Tratamiento", description: "Locion Ácido Salisílico", category: 'tratamiento' },
    { id: 4, src: PGel4, alt: "PGel4", text: "Paso 3: Hidratación", description: "Gel de Limpieza Facial", category: 'hidratacion' },
    { id: 5, src: PCrema2, alt: "PCrema2", text: "Paso 2: Tratamiento", description: "Crema Anti Age", category: 'tratamiento' },
    { id: 6, src: PSerum1, alt: "PSerum1", text: "Paso 3: Hidratación", description: "Ácido Glicólico", category: 'hidratacion' },
    { id: 7, src: PGelLimp3, alt: "PGelLimp3", text: "Paso 1: Limpieza", description: "Gel de limpieza Facial", category: 'limpieza' }
  ];

  // Función para mostrar productos basados en las elecciones del usuario
  const getRecommendedProducts = (options) => {
    const { skinType, skinAppearance, mainConcern } = options;

    // Recomendaciones predeterminadas
    const defaultRecommendations = {
      limpieza: productosRecomendados.find(p => p.id === 7),
      tratamiento: productosRecomendados.find(p => p.id === 5),
      hidratacion: productosRecomendados.find(p => p.id === 6)
    };

    // Recomendaciones basadas en elecciones del usuario (esto es de prueba se modificará según lo que indique el cliente)
    if (skinType === 'Piel muy blanca' && mainConcern === 'Acné') {
      return [
        productosRecomendados.find(p => p.id === 1), // Agua Micelar
        productosRecomendados.find(p => p.id === 5), // Crema Anti Age
        productosRecomendados.find(p => p.id === 4)  // Gel
      ];
    }

    if (skinType === 'Piel oscura' && mainConcern === 'Manchas') {
      return [
        productosRecomendados.find(p => p.id === 7), // Gel Limpieza
        productosRecomendados.find(p => p.id === 5), // Crema Anti Age
        productosRecomendados.find(p => p.id === 6)  // PSerum1
      ];
    }

    if (skinAppearance === 'Brillosa en la zona central y seca o normal en los laterales') {
      return [
        productosRecomendados.find(p => p.id === 1), // Agua Micelar
        productosRecomendados.find(p => p.id === 2), // Loción Ácido Salicílico
        productosRecomendados.find(p => p.id === 6)  // PSerum1
      ];
    }

    // Filtrar los productos recomendados eliminando los valores nulos
    return Object.values(defaultRecommendations).filter(product => product !== null);
  };

  const handleOptionSelect = (optionType, value) => {
    const updatedOptions = { ...selectedOptions, [optionType]: value };
    setSelectedOptions(updatedOptions);

    if (step === 5) {
      // Calcula las recomendaciones basadas en las opciones actualizadas
      const products = getRecommendedProducts(updatedOptions);
      setRecommendedProducts(products);
    }

    handleStart();
  };

  const fototipos = [
    { src: piel1, alt: "Fototipo 1", text: "Piel muy blanca", hoverTexts: ["Frente a la exposición solar siempre se queman", "Nunca se broncean", "Suelen tener pecas", "Ojos claros, pelo rubio o pelirojo"] },
    { src: piel2, alt: "Fototipo 2", text: "Piel clara", hoverTexts: ["Frente a la exposición solar se queman frecuentemente", "Puede adquirir un discreto tono de bronceado", "Color de ojos y pelo claro"] },
    { src: piel3, alt: "Fototipo 3", text: "Piel morena clara", hoverTexts: ["Frente a la exposición solar se queman fácilmente", "Puede adquirir un tono de bronceado gradual", "Color de ojos y pelo intermedio"] },
    { src: piel4, alt: "Fototipo 4", text: "Piel morena", hoverTexts: ["Frente a la exposición solar ocasionalmente se queman", "Siempre se broncea", "Ojos y pelo marrones"] },
    { src: piel5, alt: "Fototipo 5", text: "Piel oscura", hoverTexts: ["Frente a la exposición solar raramente se queman", "El tono de bronceado es intenso", "Color de ojos y pelo oscuro"] },
    { src: piel6, alt: "Fototipo 6", text: "Piel negra", hoverTexts: ["Frente a la exposición solar nunca se queman", "El tono de bronceado es máximo", "Color de ojos y pelo negro"] }
  ];
    

    return (
      <div className="relative flex items-center justify-center min-h-screen bg-transparent p-4 sm:p-8 md:p-12 overflow-hidden">
        <AnimatePresence>
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute w-full max-w-md sm:max-w-lg md:max-w-5xl p-6 sm:p-8 md:p-40 bg-pink-100 rounded-xl shadow-lg"
            >
              <div className="bg-pink-100 text-center ">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-gray-800">
                  Skin Test
                </h1>
                <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
                  by Skin Studio
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6">
                  Responde a las preguntas y descubre tu producto ideal
                </p>
                <button
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                  onClick={handleStart}
                >
                  Iniciar Test
                </button>
              </div>
              <button
                className="absolute pt-4 bottom-1 right-4 font-semibold text-lg text-pink-400 
                            transition-transform duration-300 hover:scale-110 flex items-center"
                onClick={handleBack}
              >
                <FaArrowLeft className="h-5 w-5 mr-2" />
                Atrás
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute w-full max-w-md sm:max-w-lg md:max-w-5xl p-6 sm:p-8 md:p-12 bg-pink-100 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-pink-100 text-center space-y-4 p-4">
                <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
                  Seleccioná tu rango de edad
                </h2>
                <div className="flex flex-col space-y-4 items-center">
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() => handleOptionSelect('age', 'Menos de 20')}
                  >
                    Menos de 20
                  </button>
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() => handleOptionSelect('age', 'Entre 20 y 29')}
                  >
                    Entre 20 y 29
                  </button>
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() => handleOptionSelect('age', 'Entre 30 y 39')}
                  >
                    Entre 30 y 39
                  </button>
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() => handleOptionSelect('age', 'Entre 40 y 49')}
                  >
                    Entre 40 y 49
                  </button>
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() => handleOptionSelect('age', 'Más de 50')}
                  >
                    Más de 50
                  </button>
                </div>
              </div>
              <button
                className="absolute pt-4 bottom-1 right-4 font-semibold text-lg text-pink-400 
                        transition-transform duration-300 hover:scale-110 flex items-center"
                onClick={handleBack}
              >
                <FaArrowLeft className="h-5 w-5 mr-2" />
                Atrás
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="flex w-full max-w-md sm:max-w-lg md:max-w-5xl p-4 sm:p-6 md:p-12 bg-pink-100 rounded-xl shadow-lg"
            >
              <div className="bg-pink-100 flex flex-col h-full">
                <div className="text-center p-4">
                  <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
                    Seleccioná tu Fototipo
                  </h2>
                  <h3 className="text-base sm:text-lg text-gray-700 mb-6">
                    El fototipo es la capacidad de la piel para asimilar la
                    radiación solar
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {fototipos.map(({ src, alt, text, hoverTexts }, index) => (
                      <div
                        key={alt}
                        className="relative flex flex-col items-center"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => handleOptionSelect('skinType', text)}
                      >
                        <motion.img
                          src={src}
                          alt={alt}
                          className={`w-full max-w-[360px] h-auto object-cover rounded-lg transition-opacity duration-300 ${
                            hoveredIndex === index
                              ? 'opacity-50'
                              : 'opacity-100'
                          }`}
                        />
                        {hoveredIndex === index && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 p-4 rounded-lg shadow-lg">
                            <ul className="list-disc text-left text-gray-700 space-y-2 m-4">
                              {hoverTexts.map((text, textIndex) => (
                                <li key={textIndex}>{text}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <p className="mt-2 text-gray-600">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end mt-4 mb-2">
                  <button
                    className="mt-4 mb-2 font-semibold text-lg text-pink-400 
                                    transition-transform duration-300 hover:scale-110 flex items-center"
                    onClick={handleBack}
                  >
                    <FaArrowLeft className="h-5 w-5 mr-2" />
                    Atrás
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute w-full max-w-md sm:max-w-lg md:max-w-5xl p-6 sm:p-8 md:p-12 bg-pink-100 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-pink-100 text-center space-y-4 p-4">
                <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
                  ¿Cómo se ve tu piel?
                </h2>
                <div className="flex flex-col space-y-4 items-center">
                  <button
                    className="w-full max-w-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() =>
                      handleOptionSelect(
                        'skinAppearance',
                        'Suave, con brillo moderado y color uniforme'
                      )
                    }
                  >
                    Suave, con brillo moderado y color uniforme
                  </button>
                  <button
                    className="w-full max-w-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() =>
                      handleOptionSelect('skinAppearance', 'Áspera y opaca')
                    }
                  >
                    Áspera y opaca
                  </button>
                  <button
                    className="w-full max-w-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() =>
                      handleOptionSelect(
                        'skinAppearance',
                        'Brillosa y con poros perceptibles'
                      )
                    }
                  >
                    Brillosa y con poros perceptibles
                  </button>
                  <button
                    className="w-full max-w-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() =>
                      handleOptionSelect(
                        'skinAppearance',
                        'Opaca con poros perceptibles y descamación'
                      )
                    }
                  >
                    Opaca con poros perceptibles y descamación
                  </button>
                  <button
                    className="w-full max-w-lg px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() =>
                      handleOptionSelect(
                        'skinAppearance',
                        'Brillosa en la zona central y seca o normal en los laterales'
                      )
                    }
                  >
                    Brillosa en la zona central y seca o normal en los laterales
                  </button>
                </div>
              </div>
              <button
                className="absolute pt-4 bottom-1 right-4 font-semibold text-lg text-pink-400 
                            transition-transform duration-300 hover:scale-110 flex items-center"
                onClick={handleBack}
              >
                <FaArrowLeft className="h-5 w-5 mr-2" />
                Atrás
              </button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute w-full max-w-md sm:max-w-lg md:max-w-5xl p-6 sm:p-8 md:p-12 bg-pink-100 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-pink-100 text-center space-y-4 p-4">
                <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
                  ¿Cuál es tu mayor preocupación respecto de tu piel?
                </h2>
                <div className="flex flex-col space-y-4 items-center">
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() => handleOptionSelect('mainConcern', 'Acné')}
                  >
                    Acné
                  </button>
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() => handleOptionSelect('mainConcern', 'Manchas')}
                  >
                    Manchas
                  </button>
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() =>
                      handleOptionSelect('mainConcern', 'Sensibilidad')
                    }
                  >
                    Sensibilidad
                  </button>
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() =>
                      handleOptionSelect('mainConcern', 'Fotodaño')
                    }
                  >
                    Fotodaño
                  </button>
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() =>
                      handleOptionSelect('mainConcern', 'Envejecimiento')
                    }
                  >
                    Envejecimiento
                  </button>
                  <button
                    className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                                    hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() =>
                      handleOptionSelect('mainConcern', 'Bolsas y ojeras')
                    }
                  >
                    Bolsas y ojeras
                  </button>
                </div>
              </div>
              <button
                className="absolute pt-4 bottom-1 right-4 font-semibold text-lg text-pink-400 
                            transition-transform duration-300 hover:scale-110 flex items-center"
                onClick={handleBack}
              >
                <FaArrowLeft className="h-5 w-5 mr-2" />
                Atrás
              </button>
            </motion.div>
          )}

          {step === 6 && (
            <motion.div
              key="step6"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="flex w-full max-w-md sm:max-w-lg md:max-w-5xl p-6 sm:p-8 md:p-12 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-white text-center space-y-4 p-4">
                <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
                  Estos son los productos recomendados para vos!
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {recommendedProducts.map((product, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg shadow-md flex flex-col items-center"
                    >
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {product.text}
                      </h3>
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="w-full h-auto object-cover rounded-lg mb-4"
                      />
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-center space-y-4 mt-6">
                  <a
                    href="https://wa.me/5493865213958?text=Hola%2Cme%20interesan%20los%20productos%20que%20me%20sugeriste."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-6 py-3 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                          hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                  >
                    Consulta por un Producto
                  </a>
                  <button
                    className="mt-6 px-6 py-3 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                          hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                    onClick={() => setStep(1)}
                  >
                    Repetir Test
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
}

export default TestSlider;

