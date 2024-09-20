import { useEffect } from 'react';
import{
    Product1,
    Product2,
    Product3,
    Product4,
    Product5,
    Product6,
    Product7,
    Product8,
    Promo1,
    Promo2,
    Promo3,
    
} from './products';

import { useNavigate } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Productos = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    requestAnimationFrame(scrollToTop);
    }, []);

   const sections = [
    {
        title: 'Tratamiento',
        products: [
            { 
                src: Product1, 
                alt: 'Crema Anti Age',
                description: 'Esta crema anti edad está formulada con ingredientes potentes que ayudan a reducir las arrugas y mejorar la elasticidad de la piel. Su textura ligera se absorbe rápidamente, proporcionando hidratación profunda y un aspecto rejuvenecido.',
                name: 'Crema Anti Age' 
            },
            { 
                src: Product8, 
                alt: 'Serum / Ácido Glicólico',
                description: 'Nuestro serum de ácido glicólico exfolia suavemente la piel, eliminando las células muertas y promoviendo una textura más suave. Ideal para combatir manchas y mejorar el tono de la piel, dejando un acabado luminoso y radiante.',
                name: 'Serum Ácido Glicólico' 
            }
        ],
    },
    {
        title: 'Limpieza',
        products: [
            { 
                src: Product2, 
                alt: 'Gel de Limpieza Facial',
                description: 'Este gel de limpieza facial elimina impurezas y exceso de grasa sin alterar la barrera natural de la piel. Enriquecido con ingredientes calmantes, deja la piel fresca y equilibrada.',
                name: 'Gel de Limpieza Facial' 
            },
            { 
                src: Product3, 
                alt: 'Gel de Limpieza con Ácido Salicílico',
                description: 'Formulado con ácido salicílico, este gel de limpieza ayuda a desobstruir poros y prevenir brotes. Su acción exfoliante suave elimina las células muertas y deja la piel clara y radiante.',
                name: 'Gel de Limpieza Ac.' 
            },
            { 
                src: Product6, 
                alt: 'Loción Ac. Salicílico',
                description: 'La loción con ácido salicílico es perfecta para tratar y prevenir imperfecciones. Su fórmula ligera penetra profundamente en la piel, ayudando a controlar el exceso de grasa y mejorando visiblemente la textura de la piel.',
                name: 'Loción Ac' 
            },
        ],
    },
    {
        title: 'Hidratación',
        products: [
            { 
                src: Product5, 
                alt: 'Agua Micelar',
                description: 'El agua micelar es un limpiador suave que elimina maquillaje y suciedad, dejando la piel hidratada y fresca. Ideal para todo tipo de piel, su fórmula suave no requiere enjuague y es perfecta para uso diario.',
                name: 'Agua Micelar' 
            },
            { 
                src: Product4, 
                alt: 'Gel Limpieza',
                description: 'Este gel de limpieza facial está diseñado para eliminar impurezas sin resecar la piel. Su fórmula hidratante deja la piel suave y nutrida, siendo ideal para un uso diario.',
                name: 'Gel de Limpieza Facial' 
            },
        ],
    },
    {
        title: 'Promociones',
        products: [
            { 
                src: Promo2, 
                alt: 'Promo Variados',
                description: 'Disfruta de nuestra promoción variada, que incluye productos seleccionados a precios especiales. Perfecto para quienes desean probar diferentes productos de nuestra línea.',
                name: 'Promo Variados' 
            },
            { 
                src: Promo3, 
                alt: 'Serum 2',
                description: 'Aprovecha nuestra promoción del serum, ideal para hidratar y revitalizar la piel. Este producto esencial proporciona un impulso de nutrientes y luminosidad a tu rutina de cuidado.',
                name: 'Promo Serum'
            },
            // { src: Promo1, alt: 'PGel 5'}
        ],
    },
];


return (
  <div className="p-4">
    <div className="p-6">
      <h1 className="text-center text-pink-400 text-5xl font-bold mb-4 mt-4">
        PRODUCTOS
      </h1>
      {sections.map((section, index) => (
        <div key={index} className="mb-8 p-4 rounded-lg shadow-lg">
          <h2 className="text-left text-pink-400 text-3xl font-semibold mb-2 border-b-2">
            {section.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {section.products.length === 2 ? (
              <div className="flex justify-center col-span-3">
                {section.products.map((product, productIndex) => {
                  const whatsappMessage = `Hola, quiero comprar ${product.name}`;
                  return (
                    <div
                      key={productIndex}
                      className="relative flex flex-col items-center mx-2"
                    >
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out"
                      />
                      <div
                        className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg opacity-0 
                                                        transition-opacity duration-300 ease-in-out hover:opacity-100"
                      >
                        <p className="text-white text-center p-2 hidden">
                          {product.description}
                        </p>
                        <a
                          href={`https://wa.me/3865213958?text=${encodeURIComponent(
                            whatsappMessage
                          )}`}
                          className="mt-2 bg-pink-400 text-white rounded-md py-1 px-4 text-center
                                                            transition duration-300 ease-in-out hover:bg-pink-500 hover:shadow-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comprar
                        </a>
                      </div>
                      <p className="mt-2 text-center uppercase text-pink-500 font-semibold text-lg shadow-sm">
                        {product.alt}
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              section.products.map((product, productIndex) => {
                const whatsappMessage = `Hola, quiero comprar ${product.name}`;
                return (
                  <div
                    key={productIndex}
                    className="relative flex flex-col items-center group"
                  >
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out"
                    />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg opacity-0 
                                                transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    >
                      <p className="text-white text-center p-2 hidden">
                        {product.description}
                      </p>
                      <a
                        href={`https://wa.me/3865213958?text=${encodeURIComponent(
                          whatsappMessage
                        )}`}
                        className="mt-2 bg-pink-400 text-white rounded-md py-1 px-4 text-center 
                                                        transition duration-300 ease-in-out hover:bg-pink-500 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Comprar
                      </a>
                    </div>
                    <p className="mt-2 text-center uppercase text-pink-500 font-semibold text-lg shadow-sm">
                      {product.alt}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>
      ))}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-pink-400 text-white rounded-md py-2 px-4 hover:bg-pink-500 transition duration-300"
        aria-label="Volver a la página anterior"
      >
        Volver Atrás
      </button>
    </div>
  </div>
);
};

export default Productos;