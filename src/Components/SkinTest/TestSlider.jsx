import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import piel1 from '../../Images/SkinTest/piel1.webp'
import piel2 from '../../Images/SkinTest/piel2.webp'
import piel3 from '../../Images/SkinTest/piel3.webp'
import piel4 from '../../Images/SkinTest/piel4.webp'
import piel5 from '../../Images/SkinTest/piel5.webp'
import piel6 from '../../Images/SkinTest/piel6.webp'

const TestSlider = () => {
    const [step, setStep] = useState(1);
  
    const handleStart = () => {
      setStep(step + 1);
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-transparent p-4 sm:p-8 md:p-12 overflow-hidden">
          <AnimatePresence>
            {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease:"easeInOut" }}
              className="absolute w-full max-w-md sm:max-w-lg md:max-w-5xl p-6 sm:p-8 md:p-40 bg-pink-100 rounded-xl shadow-lg"
            >       
              <div className="bg-pink-100 text-center ">
                    <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-gray-800">
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
             </motion.div>
             )}
      
            {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
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
                        onClick={handleStart}
                      >
                        Menos de 20
                      </button>
                      <button
                        className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                          hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                        onClick={handleStart}
                      >
                        Entre 20 y 29
                      </button>
                      <button
                        className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                          hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                        onClick={handleStart}
                      >
                        Entre 30 y 39
                      </button>
                      <button
                        className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                          hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                        onClick={handleStart}
                      >
                        Entre 40 y 49
                      </button>
                      <button
                        className="w-full max-w-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white bg-pink-400 rounded-lg shadow-md
                          hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 active:bg-pink-600"
                        onClick={handleStart}
                      >
                        Más de 50
                      </button>
                      </div>
                    </div>
             </motion.div>
             )}
             {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex w-full max-w-md sm:max-w-lg md:max-w-5xl p-4 sm:p-6 md:p-12 bg-pink-100 rounded-xl shadow-lg"
          >
            <div className="bg-pink-100 flex flex-col h-full">
              <div className="text-center p-4">
                <h2 className="text-xl sm:text-2xl text-gray-600 mb-4">
                  Seleccioná tu Fototipo
                </h2>
                <h3 className="text-base sm:text-lg text-gray-700 mb-6">
                  El fototipo es la capacidad de la piel para asimilar la radiación solar
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex justify-center items-center">
                    <img src={piel1} alt="Fototipo 1" className="w-full max-w-[360px] h-auto object-cover rounded-lg" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={piel2} alt="Fototipo 2" className="w-full max-w-[360px] h-auto object-cover rounded-lg" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={piel3} alt="Fototipo 3" className="w-full max-w-[360px] h-auto object-cover rounded-lg" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={piel4} alt="Fototipo 4" className="w-full max-w-[360px] h-auto object-cover rounded-lg" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={piel5} alt="Fototipo 5" className="w-full max-w-[360px] h-auto object-cover rounded-lg" />
                  </div>
                  <div className="flex justify-center items-center">
                    <img src={piel6} alt="Fototipo 6" className="w-full max-w-[360px] h-auto object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
          </AnimatePresence>
        </div>
    );
}

export default TestSlider


