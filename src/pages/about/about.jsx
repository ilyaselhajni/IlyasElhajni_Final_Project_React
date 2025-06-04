import React from 'react';
import Footer from '../../components/Footer';
import image1 from '../../assets/images/shopy4.webp';
import banner from '../../assets/images/contact_top.webp';

const About = () => {
    const images = [
        { image: image1 },
        { image: banner },
    ];

    return (
        <>
            
            <div
                className="bg-cover bg-center h-48 sm:h-64 md:h-80 text-white flex items-center justify-center"
                style={{ backgroundImage: `url(${images[1].image})` }}
            >
                <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow-lg'>ABOUT</h1>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center font-extralight  mx-auto px-4 py-10 gap-8 md:gap-0'>
                <figure className='hover01 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-0 sm:p-6 md:p-10 object-cover rounded-lg'>
                    <img 
                        src={images[0].image} 
                        alt="About us" 
                        className='w-full object-cover rounded-lg' 
                    />
                </figure>
                <div className='flex flex-col gap-6 sm:gap-8 md:gap-10 px-0 sm:px-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>Our story</h1>
                    <p className='text-sm sm:text-base md:text-lg text-gray-700'>
                        Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                    </p>
                    <span className='flex flex-col border-l-2 border-gray-300 pl-4 py-2 bg-gray-50 rounded-md'>
                        Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                        <span className='pt-3 text-right font-normal text-gray-500'>- Steve Mohamed</span>
                    </span>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;
