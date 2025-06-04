import React from 'react';
import dressesImg from '../../assets/images/shopi2.webp';
import watchesImg from '../../assets/images/shopy3.webp';
import bagsImg from '../../assets/images/blog-01.jpg';
import sunglassesImg from '../../assets/images/shopy5.webp';
import Footer from '../../components/Footer';
import { NavLink } from 'react-router-dom';

const featuredProducts = [
  { id: 1, name: 'Boxy7 T-Shirt with Roll Sleeve', price: 20.00, image: dressesImg },
  { id: 2, name: 'Boxy6 T-Shirt with Roll Sleeve', price: 20.00, image: watchesImg },
  { id: 3, name: 'Boxy5 T-Shirt with Roll Sleeve', price: 20.00, image: bagsImg },
  { id: 4, name: 'Boxy4 T-Shirt with Roll Sleeve', price: 20.00, image: sunglassesImg },
  { id: 5, name: 'Boxy3 T-Shirt with Roll Sleeve', price: 30.00, oldPrice: 20.00, image: dressesImg },
];

const BlogPage = () => (
  <>
    <div className="max-w-7xl mx-auto py-10 px-2 sm:px-6 flex flex-col md:flex-row gap-10">
      <main className="flex-1">
        <div className="bg-white p-6 rounded shadow">
          <div className="relative mb-6">
            <figure className="hover01 w-full aspect-[4/3] overflow-hidden rounded">
              <img src={bagsImg} alt="Blog" className="w-full h-full object-cover" />
            </figure>
            <span className="absolute bottom-0 left-0 bg-black text-white text-xs font-bold px-3 py-1 m-4 rounded">28 DEC, 2017</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Black Friday Guide: Best Sales & Discount Codes</h1>
          <div className="text-gray-500 text-sm mb-2">by fashe-theme Admin | crafts, street style | 1 Comments</div>
          <div className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</div>
          <a href="#" className="text-black font-semibold flex items-center gap-2 hover:underline">Continue Reading <span>&rarr;</span></a>
        </div>
      </main>
      <aside className="w-full md:w-80 flex-shrink-0">
        <form className="mb-8">
          <input type="text" placeholder="Search..." className="w-full border rounded-full px-4 py-2 pr-10" />
        </form>
        <div>
          <div className="font-bold text-lg mb-4">Featured Products</div>
          <ul className="space-y-4">
            {featuredProducts.map(prod => (
              <li key={prod.id} className="flex items-center gap-3">
                <figure className="hover01 w-16 h-16 flex-shrink-0 overflow-hidden rounded">
                  <img src={prod.image} alt={prod.name} className="w-16 h-16 object-cover" />
                </figure>
                <div>
                  <div className="font-montserrat text-sm font-semibold leading-tight">{prod.name}</div>
                  <div className="text-xs text-gray-500">
                    {prod.oldPrice && <span className="line-through mr-1">${prod.oldPrice.toFixed(2)}</span>}
                    <span>${prod.price.toFixed(2)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
    <Footer />
  </>
);

export default BlogPage; 