import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousell1 from '../../assets/images/carousel1.jpg'
import carousell2 from '../../assets/images/carousel2.jpg'
import carousell3 from '../../assets/images/carousel3.webp'

const HomePage = () => {
    const sliderRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

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
                    {slides.map((slide) => (
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
                                <div className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30'>
                                    <h2 className='text-4xl font-bold mb-4 animate-fade-in-up'>{slide.title}</h2>
                                    <p className='text-xl mb-8 animate-fade-in-up animation-delay-200'>{slide.description}</p>
                                    <button className='px-8 py-3 bg-white text-black hover:bg-[#E65641] hover:text-white rounded-full transition-colors duration-300 animate-fade-in-up animation-delay-400'>
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
        </div>
    );
};

export default HomePage;
