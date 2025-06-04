import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { image } from 'framer-motion/client';

const products = [
  {
    id: 1,
    name: 'Boxy T-Shirt with Roll Sleeve Detail',
    price: 20.00,
    images: [
     
    ],
    brand: 'MyVendor',
    categories: ['boxy', 'Shirts', 'sleeveless'],
    description: 'Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState('description');

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return (
    <div className="max-w-7xl mx-auto py-10 px-2 sm:px-6 flex flex-col md:flex-row gap-10">
      <div className="flex flex-col md:flex-row gap-8 flex-1">
        <div className="flex md:flex-col gap-2 md:gap-4 overflow-x-auto md:overflow-x-visible">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={limg}
              alt="thumb"
              className={`w-20 h-24 object-cover border ${selectedImage === idx ? 'border-black' : 'border-gray-200'} cursor-pointer rounded`}
              onClick={() => setSelectedImage(idx)}
            />
          ))}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={product.images[selectedImage]} alt={product.name} className="max-h-[500px] w-auto object-contain rounded shadow" />
        </div>
      </div>
      <div className="flex-1 max-w-xl">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <div className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</div>
        <div className="text-gray-500 mb-4">{product.description.slice(0, 100)}...</div>
        <div className="flex gap-2 mb-4">
          {product.sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-1 border rounded ${selectedSize === size ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 text-black'} font-semibold`}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-8 h-8 bg-gray-200 text-xl rounded">-</button>
          <span className="w-8 text-center">{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)} className="w-8 h-8 bg-gray-200 text-xl rounded">+</button>
          <button
            onClick={() => addToCart({ ...product, qty: quantity, size: selectedSize })}
            className="ml-4 bg-black text-white px-8 py-2 rounded-full font-semibold text-base hover:bg-red-500 transition-colors"
          >
            ADD TO CART
          </button>
        </div>
        <div className="mb-4 text-sm text-gray-600">
          <span className="font-semibold">Brand:</span> {product.brand} <br />
          <span className="font-semibold">Categories:</span> {product.categories.join(' , ')}
        </div>
        <div className="border-t pt-4 mt-4">
          <div className="flex gap-6 mb-2">
            <button onClick={() => setTab('description')} className={`text-base font-semibold pb-1 border-b-2 ${tab === 'description' ? 'border-black' : 'border-transparent'}`}>Description</button>
            <button onClick={() => setTab('info')} className={`text-base font-semibold pb-1 border-b-2 ${tab === 'info' ? 'border-black' : 'border-transparent'}`}>Additional Information</button>
            <button onClick={() => setTab('reviews')} className={`text-base font-semibold pb-1 border-b-2 ${tab === 'reviews' ? 'border-black' : 'border-transparent'}`}>Reviews</button>
          </div>
          {tab === 'description' && (
            <div className="text-gray-600 text-sm">{product.description.repeat(3)}</div>
          )}
          {tab === 'info' && (
            <div className="text-gray-600 text-sm">Additional product information goes here.</div>
          )}
          {tab === 'reviews' && (
            <div className="text-gray-600 text-sm">No reviews yet.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 