import React from 'react';
import banner from '../../assets/images/contact_top.webp';
import Footer from '../../components/Footer';

const Contact = () => {
    const images = [
        { image: banner },
    ];
    return (
        <div>
            <div
                className="bg-cover bg-center h-48 sm:h-64 md:h-80 text-white flex items-center justify-center"
                style={{ backgroundImage: `url(${images[0].image})` }}
            >
                <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-center drop-shadow-lg'>CONTACT</h1>
            </div>
            <div className="max-w-7xl mx-auto px-2 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="w-full h-[350px] md:h-[500px] rounded-lg overflow-hidden shadow">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35365.275418827856!2d-7.542789306872278!3d33.60625686776432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1749046359542!5m2!1sen!2sma"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <form className="w-full flex flex-col gap-6 justify-center">
                    <h2 className="text-2xl font-montserrat font-semibold mb-2">Send us your message</h2>
                    <input type="text" placeholder="Name" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black" />
                    <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black" />
                    <input type="text" placeholder="Phone" className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black" />
                    <textarea placeholder="Message" rows={4} className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-black resize-none" />
                    <button type="submit" className="w-full sm:w-1/2 md:w-1/3 bg-black text-white py-3 rounded-full font-montserrat text-lg font-semibold tracking-wide hover:bg-[#E65641] transition self-center mt-2">SEND</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;