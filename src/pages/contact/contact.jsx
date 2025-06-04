import React from 'react';

const Contact = () => {
    return (
        <div>
             <div
                className="bg-cover bg-center h-48 sm:h-64 md:h-80 text-white flex items-center justify-center"
                style={{ backgroundImage: `url(${images[1].image})` }}
            >
                <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow-lg'>CONTACT</h1>
            </div>
        </div>
    );
};

export default Contact;