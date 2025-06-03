import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousell1 from '../../assets/images/carousel1.jpg'
import carousell2 from '../../assets/images/carousel2.jpg'
import carousell3 from '../../assets/images/carousel3.webp'
import dressesImg from '../../assets/images/cards1.webp';
import watchesImg from '../../assets/images/cards2.webp';
import bagsImg from '../../assets/images/cards3.webp';
import sunglassesImg from '../../assets/images/cards4.webp';
import footwearImg from '../../assets/images/cards5.webp';
import accessoriesImg from '../../assets/images/cards6.webp';

const HomePage = () => {
    const sliderRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: true,
        afterChange: (index) => setCurrentSlide(index),
    };

    const slides = [
        {
            id: 1,
            image: carousell1,
            title: "Welcome to Our Store",
            description: "Discover our latest collection",
            buttonText: "Shop Now"
        },
        {
            id: 2,
            image: carousell2,
            title: "New Arrivals",
            description: "Check out our newest products",
            buttonText: "View Collection"
        },
        {
            id: 3,
            image: carousell3,
            title: "Special Offers",
            description: "Limited time deals",
            buttonText: "Shop Now"
        }
    ];

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className='min-h-screen'>
            <div 
                className='w-full p-0 m-0 relative'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Slider ref={sliderRef} {...settings}>
                    {slides.map((slide, idx) => (
                        <div key={slide.id} className='relative'>
                            <div 
                                className='w-full h-[600px] relative'
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div key={currentSlide} className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30'>
                                    <h2 className='text-xl size-18 mb-4 animate-fade-in-up'>{slide.title}</h2>
                                    <p className='text-6xl mb-8 font-extrabold animate-fade-in-up animation-delay-00'>{slide.description}</p>
                                    <button className='px-8 py-3 bg-white text-black hover:bg-[#E65641] hover:text-white rounded-full transition-colors duration-100 animate-fade-in-up animation-delay-00'>
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <button 
                    onClick={prevSlide}
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button 
                    onClick={nextSlide}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white flex flex-col items-center justify-end relative shadow-sm">
                    <img src={dressesImg} alt="Dresses" className="w-full  object-cover" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 text-center shadow-md text-gray-800 font-medium text-lg tracking-wide">DRESSES</div>
                </div>
                <div className="bg-gray-50 flex flex-col items-center justify-end relative shadow-sm">
                    <img src={watchesImg} alt="Watches" className="w-full  object-contain p-8" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 text-center shadow-md text-gray-800 font-medium text-lg tracking-wide">WATCHES</div>
                </div>
                <div className="bg-white flex flex-col items-center justify-end relative shadow-sm">
                    <img src={bagsImg} alt="Bags" className="w-full object-cover" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 text-center shadow-md text-gray-800 font-medium text-lg tracking-wide">BAGS</div>
                </div>
                <div className="bg-white flex flex-col items-center justify-end relative shadow-sm">
                    <img src={sunglassesImg} alt="Sunglasses" className="w-full  object-contain p-8" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 text-center shadow-md text-gray-800 font-medium text-lg tracking-wide">SUNGLASSES</div>
                </div>
                <div className="bg-white flex flex-col items-center justify-end relative shadow-sm">
                    <img src={footwearImg} alt="Footwear" className="w-full object-cover" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 text-center shadow-md text-gray-800 font-medium text-lg tracking-wide">FOOTERWEAR</div>
                </div>
                <div className="bg-white flex flex-col items-center justify-end relative shadow-sm">
                    <img src={accessoriesImg} alt="Accessories" className="w-full  object-contain p-8" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3 text-center shadow-md text-gray-800 font-medium text-lg tracking-wide">ACCESSORIES</div>
                </div>  
            </div>   
        </div>
    );
};

export default HomePage;
