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



const Productos = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            title: 'Tratamiento:',
            products: [
                { src: Product1, alt: 'Crema Anti Age',description: 'Descripción de la Crema Anti Age',name: 'Crema Anti Age' },
                { src: Product8, alt: 'Serum / Ácido Glicólico',description: 'Descripción del Ácido Glicólico',name: 'Serum Ácido Glicólico' }
            ],
        },
        {
            title: 'Limpieza:',
            products: [
                { src: Product2, alt: 'Gel de Limpieza Facial',description:'Descripción del gel de limpieza',name: 'Gel de Limpieza Facial' },
                { src: Product3, alt: 'Gel de Limpieza con Ácido Salicílico',description:'Descripción del gel de limpieza',name: 'Gel de Limpieza Ac.' },
                { src: Product6, alt: 'Loción Ac. Salicílico',description:'Descripción de la loción', name: 'Loción Ac' },
            ],
        },
        {
            title: 'Hidratación:',
            products: [
                { src: Product5, alt: 'Agua Micelar',description:'Descripción del Agua Micelar',name: 'Agua Micelar' },
                { src: Product4, alt: 'Gel Limpieza',description:'Descripción del gel de limpieza',name: 'Gel de Limpieza Facial'},
            ],
        },
        {
            title: 'Promociones:',
            products: [
                { src: Promo2, alt: 'Promo Variados',description:'Descripción de la promoción',name: 'Promo Variados' },
                { src: Promo3, alt: 'Serum 2',description:'Descripción de la promoción',name: 'Promo Serum'},
                //{ src: Promo1, alt: 'PGel 5'}
            ],
        },
    ];

return (
        <div className='p-4'>
            <div className="p-6">
                <h1 className="text-center text-pink-400 text-5xl font-bold mb-4 mt-4">Productos</h1>
                {sections.map((section, index) => (
                    <div key={index} className="mb-8 p-4 rounded-lg shadow-lg">
                        <h2 className="text-left text-pink-400 text-3xl font-semibold mb-2 border-b-2">{section.title}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                            {section.products.length === 2 ? (
                                <div className="flex justify-center col-span-3">
                                    {section.products.map((product, productIndex) => {
                                        const whatsappMessage = `Hola, quiero comprar ${product.name}`;
                                        return (
                                            <div key={productIndex} className="relative flex flex-col items-center mx-2">
                                                <img 
                                                    src={product.src} 
                                                    alt={product.alt} 
                                                    className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out" 
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg opacity-0 
                                                        transition-opacity duration-300 ease-in-out hover:opacity-100">
                                                    <p className="text-white text-center p-2">{product.description}</p>
                                                    <a 
                                                        href={`https://wa.me/3865213958?text=${encodeURIComponent(whatsappMessage)}`} 
                                                        className="mt-2 bg-pink-400 text-white rounded-md py-1 px-4 text-center
                                                            transition duration-300 ease-in-out hover:bg-pink-500 hover:shadow-lg"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Comprar
                                                    </a>
                                                </div>
                                                <p className="mt-2 text-center">{product.alt}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                section.products.map((product, productIndex) => {
                                    const whatsappMessage = `Hola, quiero comprar ${product.name}`;
                                    return (
                                        <div key={productIndex} className="relative flex flex-col items-center group">
                                            <img 
                                                src={product.src} 
                                                alt={product.alt} 
                                                className="w-full h-auto rounded-lg shadow-md transition duration-300 ease-in-out" 
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg opacity-0 
                                                transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                                <p className="text-white text-center p-2">{product.description}</p>
                                                <a 
                                                    href={`https://wa.me/3865213958?text=${encodeURIComponent(whatsappMessage)}`} 
                                                    className="mt-2 bg-pink-400 text-white rounded-md py-1 px-4 text-center 
                                                        transition duration-300 ease-in-out hover:bg-pink-500 hover:shadow-lg"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Comprar
                                                </a>
                                            </div>
                                            <p className="mt-2 text-center">{product.alt}</p>
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