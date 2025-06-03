import React, { useRef, useState, useEffect } from 'react';
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
import Img from '../../assets/images/shopi2.webp';
import Img2 from '../../assets/images/shopy3.webp';
import Img3 from '../../assets/images/shopy5.webp';
import Img4 from '../../assets/images/shopy4.webp';
import Img5 from '../../assets/images/shopy6.webp';
import Img6 from '../../assets/images/shopy7.webp';
import Img7 from '../../assets/images/shopy8.webp';
import sunglassesImg2 from '../../assets/images/shop-item-09.jpg';

import lookbookImg from '../../assets/images/cards1.webp';
import dealImg from '../../assets/images/banner-08.jpg';
import blogImg1 from '../../assets/images/blog-01.jpg';
import blogImg2 from '../../assets/images/blog-02.jpg';
import blogImg3 from '../../assets/images/blog-03.jpg';

const HomePage = () => {
    const sliderRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTab, setActiveTab] = useState('Best Seller');
    const tabList = ['all', 'Best Seller', 'Featured', 'Home page'];
    const [timer, setTimer] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

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

    const products = [
        {
            id: 1,
            name: 'Boxy7 T-Shirt with Roll Sleeve',
            price: 20.00,
            image: dressesImg,
            isSale: false,
            oldPrice: null,
            category: 'Best Seller',
        },
        {
            id: 2,
            name: 'Boxy6 T-Shirt with Roll Sleeve',
            price: 20.00,
            image: watchesImg,
            isSale: false,
            oldPrice: null,
            category: 'Best Seller',
        },
        {
            id: 3,
            name: 'Boxy5 T-Shirt with Roll Sleeve',
            price: 20.00,
            image: bagsImg,
            isSale: false,
            oldPrice: null,
            category: 'Featured',
        },
        {
            id: 4,
            name: 'Boxy4 T-Shirt with Roll Sleeve',
            price: 20.00,
            image: sunglassesImg,
            isSale: false,
            oldPrice: null,
            category: 'Home page',
        },
        {
            id: 5,
            name: 'Boxy3 T-Shirt with Roll Sleeve',
            price: 20.00,
            image: dressesImg,
            isSale: true,
            oldPrice: 30.00,
            category: 'Best Seller',
        },
        {
            id: 6,
            name: 'Boxy2 T-Shirt with Roll Sleeve',
            price: 20.00,
            image: watchesImg,
            isSale: false,
            oldPrice: null,
            category: 'Featured',
        },
        {
            id: 7,
            name: 'Boxy1 T-Shirt with Roll Sleeve',
            price: 20.00,
            image: bagsImg,
            isSale: false,
            oldPrice: null,
            category: 'Home page',
        },
        {
            id: 8,
            name: 'Boxy T-Shirt with Roll Sleeve Detail',
            price: 20.00,
            image: sunglassesImg,
            isSale: false,
            oldPrice: null,
            category: 'Featured',
        }
    ];
    const products2 = [
        {   id: 9,
            name: 'Boxy T-Shirt with Roll Sleeve Detail',
            price: 20.00,
            image: Img,
            isSale: false,
            oldPrice: null,
            category: 'Featured',
        }, 
        {   id: 10,
            name: 'Boxy T-Shirt with Roll Sleeve Detail',
            price: 20.00,
            image: Img2,
            isSale: false,
            oldPrice: null,
            category: 'Featured',
        },
        {   id: 11,
            name: 'Boxy T-Shirt with Roll Sleeve Detail',
            price: 20.00,
            image: Img4,
            isSale: false,
            oldPrice: null,
            category: 'Featured',
        },
        {   id: 12,
            name: 'Boxy T-Shirt with Roll Sleeve Detail',
            price: 20.00,
            image: Img3,
            isSale: false,
            oldPrice: null,
            category: 'Featured',
        },
        {   id: 13,
            name: 'Boxy T-Shirt with Roll Sleeve Detail',
            price: 20.00,
            image: Img4,
            isSale: false,
            oldPrice: null,
            category: 'Featured',
        },
        {   id: 14,
            name: 'Boxy T-Shirt with Roll Sleeve Detail',
            price: 20.00,
            image: Img5,
            isSale: false,
            oldPrice: null,
            category: 'Featured',
        },
        {   id: 15,
            name: 'Boxy T-Shirt with Roll Sleeve Detail',
            price: 20.00,
            image: Img6,
            isSale: true,
            oldPrice: null,
            category: 'Best Seller',
        },
         {   id: 16,
            name: 'Boxy T-Shirt with Roll Sleeve Detail',
            price: 20.00,
            image: Img7,
            isSale: false,
            oldPrice: null,
            category: 'Best Seller',
        }
    ];

    const allProducts = [...products2];

    const filteredProducts = activeTab.toLowerCase() === 'all'
      ? allProducts
      : allProducts.filter(
          p => p.category && p.category.toLowerCase() === activeTab.toLowerCase()
        );

    // Set your target date here (e.g., 7 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate - now;
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const mins = Math.floor((diff / (1000 * 60)) % 60);
                const secs = Math.floor((diff / 1000) % 60);
                setTimer({ days, hours, mins, secs });
            } else {
                setTimer({ days: 0, hours: 0, mins: 0, secs: 0 });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='min-h-screen'>
            <div 
                className=' p-0 m-0 relative'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Slider ref={sliderRef} {...settings}>
                    {slides.map((slide, idx) => (
                        <div key={slide.id} className='relative'>
                            <div 
                                className=' h-[600px] relative'
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                <div key={currentSlide} className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30'>
                                    <h2 className='text-xl size-18 mb-4 '>{slide.title}</h2>
                                    <p className='text-6xl mb-8 font-extrabold  '>{slide.description}</p>
                                    <button className='px-8 py-3 bg-white text-black hover:bg-[#E65641] hover:text-white rounded-full transition-colors duration-100 '>
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

            <div className="max-w-6xl mx-auto px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Dresses */}
                <div className="relative bg-white aspect-square flex items-end justify-center overflow-hidden">
                    <img src={dressesImg} alt="Dresses" className="absolute inset-0   object-cover" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-10 py-3 text-center shadow text-gray-800 font-montserrat font-medium text-base tracking-wide uppercase">
                        Dresses
                    </div>
                </div>
                {/* Watches */}
                <div className="relative aspect-square flex items-end justify-center overflow-hidden">
                    <img src={watchesImg} alt="Watches" className="absolute inset-0   object-contain  " />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-10 py-3 text-center shadow text-gray-800 font-montserrat font-medium text-base tracking-wide uppercase">
                        Watches
                    </div>
                </div>
                {/* Bags */}
                <div className="relative bg-white aspect-square flex items-end justify-center overflow-hidden">
                    <img src={bagsImg} alt="Bags" className="absolute inset-0   object-cover" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-10 py-3 text-center shadow text-gray-800 font-montserrat font-medium text-base tracking-wide uppercase">
                        Bags
                    </div>
                </div>
                {/* Sunglasses */}
                <div className="relative aspect-square flex items-end justify-center overflow-hidden">
                    <img src={sunglassesImg} alt="Sunglasses" className="absolute inset-0   object-contain py-5 " />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-10 py-3 text-center shadow text-gray-800 font-montserrat font-medium text-base tracking-wide uppercase">
                        Sunglasses
                    </div>
                </div>
                {/* Footwear */}
                <div className="relative bg-white aspect-square flex items-end justify-center overflow-hidden">
                    <img src={footwearImg} alt="Footwear" className="absolute inset-0   object-cover  " />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-10 py-3 text-center shadow text-gray-800 font-montserrat font-medium text-base tracking-wide uppercase">
                        Footwear
                    </div>
                </div>
                {/* Accessories */}
                <div className="relative =aspect-square flex items-end justify-center overflow-hidden">
                    <img src={accessoriesImg} alt="Accessories" className="absolute inset-0   object-cover py-5" />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-10 py-3 text-center shadow text-gray-800 font-montserrat font-medium text-base tracking-wide uppercase">
                        Accessories
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 font-montserrat uppercase tracking-wide">Our Products</h2>
                {/* Tabs */}
                <div className="flex justify-center gap-8 mb-10 font-montserrat text-base font-medium">
                    {tabList.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={
                                activeTab === tab
                                    ? 'text-[#E65641] border-b-2 border-[#E65641] pb-1'
                                    : 'text-gray-500 hover:text-[#E65641] pb-1'
                            }
                        >
                            {tab}
                        </button>
                    ))}
                </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {filteredProducts.map(filters => (
        <div key={filters.id} className="bg-white flex flex-col items-start shadow-sm">
            <div className="relative w-full aspect-square overflow-hidden">
                <img src={filters.image} alt={filters.name} className="absolute inset-0 h-full object-cover" />
                {filters.isSale && (
                    <span className="absolute top-3 left-3 bg-[#E65641] text-white text-xs font-bold px-3 py-1 rounded-full font-montserrat">
                        Sale
                    </span>
                )}
            </div>
            <div className="p-4">
                <div className="font-montserrat text-sm text-gray-800 mb-1">{filters.name}</div>
                <div className="flex items-center gap-2">
                    {filters.isSale && filters.oldPrice && (
                        <span className="text-gray-400 line-through text-xs font-montserrat">
                            ${filters.oldPrice.toFixed(2)}
                        </span>
                    )}
                    <span className={`text-base font-bold font-montserrat ${filters.isSale ? 'text-[#E65641]' : 'text-gray-800'}`}>
                        ${filters.price.toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    ))}
</div>

            </div>

            {/* Lookbook + Deal Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {/* Lookbook */}
                    <div className="relative aspect-square flex items-center justify-center overflow-hidden bg-white">
                        <img src={dealImg} alt="Lookbook" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-white text-2xl md:text-3xl font-montserrat font-semibold mb-2">The Beauty</span>
                            <span className="text-white text-5xl md:text-6xl font-montserrat font-extrabold mb-4 tracking-wider">LOOKBOOK</span>
                            <span className="text-white text-lg font-montserrat tracking-widest mt-2">VIEW COLLECTION</span>
                        </div>
                    </div>
                    {/* Deal Product */}
                    <div className="flex flex-col items-center justify-center bg-white aspect-square p-8">
                        <img src={sunglassesImg2} alt="Deal Product" className="w-2/3 h-2/3 object-cover mb-6" />
                        <div className="text-center">
                            <div className="font-montserrat text-lg text-gray-700 mb-2">Boxy2 T-Shirt with Roll Sleeve</div>
                            <div className="font-montserrat text-2xl font-bold text-gray-800 mb-6">$20.00</div>
                            {/* Countdown Timer */}
                            <div className="flex justify-center gap-3 mt-4">
                                <div className="flex flex-col items-center bg-white border px-6 py-2">
                                    <span className="text-xl font-bold text-gray-700">{timer.days}</span>
                                    <span className="text-gray-400 text-xs mt-1">days</span>
                                </div>
                                <div className="flex flex-col items-center bg-white border px-6 py-2">
                                    <span className="text-xl font-bold text-gray-700">{timer.hours}</span>
                                    <span className="text-gray-400 text-xs mt-1">hrs</span>
                                </div>
                                <div className="flex flex-col items-center bg-white border px-6 py-2">
                                    <span className="text-xl font-bold text-gray-700">{timer.mins}</span>
                                    <span className="text-gray-400 text-xs mt-1">mins</span>
                                </div>
                                <div className="flex flex-col items-center bg-white border px-6 py-2">
                                    <span className="text-xl font-bold text-gray-700">{timer.secs}</span>
                                    <span className="text-gray-400 text-xs mt-1">secs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div className="max-w-7xl mx-auto px-20 py-16">
                <h2 className="text-3xl font-bold text-center mb-12 font-montserrat uppercase tracking-wide">Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Blog Card 1 */}
                    <div className="bg-white flex flex-col items-start">
                        <img src={blogImg1} alt="Blog 1" className="w-full aspect-square object-cover mb-6" />
                        <div className="font-montserrat text-lg font-semibold text-gray-900 mb-2">Black Friday Guide: Best Sales & Discount Codes</div>
                        <div className="text-gray-500 text-sm mb-4">by fashe-theme Admin on Dec 28,2017</div>
                        <div className="text-gray-500 text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</div>
                    </div>
                    {/* Blog Card 2 */}
                    <div className="bg-white flex flex-col items-start">
                        <img src={blogImg2} alt="Blog 2" className="w-full aspect-square object-cover mb-6" />
                        <div className="font-montserrat text-lg font-semibold text-gray-900 mb-2">The White Sneakers Nearly Every Fashion Girls Own</div>
                        <div className="text-gray-500 text-sm mb-4">by fashe-theme Admin on Dec 28,2017</div>
                        <div className="text-gray-500 text-base leading-relaxed">Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod. Interdum et...</div>
                    </div>
                    {/* Blog Card 3 */}
                    <div className="bg-white flex flex-col items-start">
                        <img src={blogImg3} alt="Blog 3" className="w-full aspect-square object-cover mb-6" />
                        <div className="font-montserrat text-lg font-semibold text-gray-900 mb-2">New York SS 2018 Street Style: By Annina Mislin</div>
                        <div className="text-gray-500 text-sm mb-4">by fashe-theme Admin on Dec 28,2017</div>
                        <div className="text-gray-500 text-base leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
