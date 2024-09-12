import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
} from './productos';

const ProductosDestacados = () => {
    const ProductosDestacados = [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8,
        product9,
        product10,
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className="py-12 font-lora font-bold" data-aos="fade-down">
            <div className="container mx-auto">
                <h2 className="text-4xl font-lora text-center underline text-pink-500 mb-8">
                    PRODUCTOS DESTACADOS
                </h2>
                <Slider {...sliderSettings} className="slick-slider">
                    {ProductosDestacados.map((prod, index) => (
                        <div key={index} className="p-4">
                            <div className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                                <img
                                    src={prod}
                                    alt={`Obra Social ${index + 1}`}
                                    className="w-full h-32 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProductosDestacados;
