import React from 'react';
import error from '../../assets/images/not-found.webp'
const ErrorPage = () => {
    const images = [
        {
            image : error
            
        }
    ];
    return (
        <>

            <img  src = {images[0].image} alt=""  className=' m-0 items-center flex content-center justify-center h-100 w-100'/>

        </>
    );
};

export default ErrorPage;
