import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import dressesImg from '../../assets/images/shopi2.webp';
import watchesImg from '../../assets/images/shopy3.webp';
import bagsImg from '../../assets/images/shopy4.webp';
import sunglassesImg from '../../assets/images/shopy5.webp';
import Footer from '../../components/Footer';

const allProducts = [
  {
    id: 1,
    name: 'Boxy T-Shirt with Roll Sleeve Detail',
    price: 20.00,
    image: dressesImg,
    isSale: false,
    oldPrice: null,
    category: 'Best Seller',
    color: 'black',
    size: 'M',
  },
  {
    id: 2,
    name: 'Boxy1 T-Shirt with Roll Sleeve',
    price: 20.00,
    image: watchesImg,
    isSale: false,
    oldPrice: null,
    category: 'Best Seller',
    color: 'gray',
    size: 'L',
  },
  {
    id: 3,
    name: 'Boxy2 T-Shirt with Roll Sleeve',
    price: 20.00,
    image: sunglassesImg,
    isSale: false,
    oldPrice: null,
    category: 'Best Seller',
    color: 'red',
    size: 'S',
  },
  {
    id: 4,
    name: 'Boxy3 T-Shirt with Roll Sleeve',
    price: 20.00,
    image: bagsImg,
    isSale: true,
    oldPrice: 30.00,
    category: 'Featured',
    color: 'black',
    size: 'XL',
  },
  {
    id: 5,
    name: 'Boxy4 T-Shirt with Roll Sleeve',
    price: 20.00,
    image: dressesImg,
    isSale: false,
    oldPrice: null,
    category: 'Men',
    color: 'gray',
    size: 'M',
  },
  {
    id: 6,
    name: 'Boxy5 T-Shirt with Roll Sleeve',
    price: 20.00,
    image: watchesImg,
    isSale: false,
    oldPrice: null,
    category: 'Women',
    color: 'red',
    size: 'L',
  },
  {
    id: 7,
    name: 'Boxy6 T-Shirt with Roll Sleeve',
    price: 20.00,
    image: bagsImg,
    isSale: false,
    oldPrice: null,
    category: 'Men',
    color: 'black',
    size: 'S',
  },
  {
    id: 8,
    name: 'Boxy7 T-Shirt with Roll Sleeve',
    price: 20.00,
    image: sunglassesImg,
    isSale: false,
    oldPrice: null,
    category: 'Women',
    color: 'gray',
    size: 'XL',
  },
];

const categories = [
  { name: 'Best Seller', count: 8 },
  { name: 'Featured', count: 8 },
  { name: 'Men', count: 8 },
  { name: 'Women', count: 8 },
];
const colors = ['black', 'gray', 'red'];
const prices = [
  { label: '0-20', min: 0, max: 20 },
  { label: '20-40', min: 20, max: 40 },
];
const sizes = ['L', 'M', 'S', 'XL'];

const ShopPage = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sort, setSort] = useState('az');
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);

  let filtered = allProducts.filter(p =>
    (!selectedCategory || p.category === selectedCategory) &&
    (selectedColors.length === 0 || selectedColors.includes(p.color)) &&
    (selectedPrices.length === 0 || selectedPrices.some(pr => p.price >= pr.min && p.price <= pr.max)) &&
    (selectedSizes.length === 0 || selectedSizes.includes(p.size)) &&
    (search === '' || p.name.toLowerCase().includes(search.toLowerCase()))
  );
  if (sort === 'az') filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sort === 'za') filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
  const total = filtered.length;
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(total / perPage);

  return (
    <>
    <div className="flex max-w-7xl mx-auto py-10 px-2 sm:px-6 gap-8">
      <aside className="w-64 hidden md:block">
        <div className="font-bold mb-4">Categories</div>
        <ul className="mb-6 space-y-1">
          {categories.map(cat => (
            <li key={cat.name} className="text-sm cursor-pointer" onClick={() => setSelectedCategory(cat.name)}>
              {cat.name} <span className="text-gray-400">({cat.count} items)</span>
            </li>
          ))}
        </ul>
        <div className="font-bold mb-2 mt-6">color</div>
        <ul className="mb-6 space-y-1">
          {colors.map(color => (
            <li key={color} className="text-sm">
              <label>
                <input type="checkbox" className="mr-2" checked={selectedColors.includes(color)} onChange={e => setSelectedColors(e.target.checked ? [...selectedColors, color] : selectedColors.filter(c => c !== color))} />
                {color}
              </label>
            </li>
          ))}
        </ul>
        <div className="font-bold mb-2 mt-6">price</div>
        <ul className="mb-6 space-y-1">
          {prices.map(pr => (
            <li key={pr.label} className="text-sm">
              <label>
                <input type="checkbox" className="mr-2" checked={selectedPrices.includes(pr)} onChange={e => setSelectedPrices(e.target.checked ? [...selectedPrices, pr] : selectedPrices.filter(p => p !== pr))} />
                {pr.label}
              </label>
            </li>
          ))}
        </ul>
        <div className="font-bold mb-2 mt-6">size</div>
        <ul className="mb-6 space-y-1">
          {sizes.map(size => (
            <li key={size} className="text-sm">
              <label>
                <input type="checkbox" className="mr-2" checked={selectedSizes.includes(size)} onChange={e => setSelectedSizes(e.target.checked ? [...selectedSizes, size] : selectedSizes.filter(s => s !== size))} />
                {size}
              </label>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." className="w-full border px-3 py-2 rounded text-sm" />
        </div>
      </aside>
      <main className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div className="flex gap-2">
            <select value={sort} onChange={e => setSort(e.target.value)} className="border px-2 py-1 rounded text-sm">
              <option value="az">Alphabetically, A-Z</option>
              <option value="za">Alphabetically, Z-A</option>
            </select>
            <select value={perPage} onChange={e => setPerPage(Number(e.target.value))} className="border px-2 py-1 rounded text-sm">
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">Showing {Math.min((page - 1) * perPage + 1, total)} to {Math.min(page * perPage, total)} of {total} items</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginated.map(product => (
            <div key={product.id} className="relative group bg-white p-2 flex flex-col items-center">
              <div className="relative w-full aspect-[3/4] overflow-hidden flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
                {product.isSale && (
                  <span className="absolute top-2 left-2 bg-[#E65641] text-white text-xs font-bold px-2 py-1 rounded-full font-montserrat">Sale</span>
                )}
                <button
                  onClick={() => { addToCart(product); navigate('/cart'); }}
                  className="absolute left-1/2 bottom-4 -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-black text-white px-6 py-2 rounded-full font-montserrat text-sm font-semibold transition-all duration-300 shadow-lg hover:bg-[#E65641]"
                  style={{ pointerEvents: 'auto' }}
                >
                  ADD TO CART
                </button>
              </div>
              <div className="mt-3 w-full text-center">
                <div className="font-montserrat text-sm font-semibold mb-1">{product.name}</div>
                <div className="font-montserrat text-base font-bold">
                  {product.isSale && product.oldPrice && (
                    <span className="text-gray-400 line-through text-xs mr-2">${product.oldPrice.toFixed(2)}</span>
                  )}
                  <span className={product.isSale ? 'text-[#E65641]' : 'text-gray-800'}>${product.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
     
        <div className="flex justify-center items-center gap-2 mt-8">
          <button disabled={page === 1} onClick={() => setPage(page - 1)} className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-50">&lt;</button>
          {[...Array(totalPages)].map((_, i) => (
            <button key={i} onClick={() => setPage(i + 1)} className={`w-8 h-8 rounded-full border flex items-center justify-center ${page === i + 1 ? 'bg-black text-white' : ''}`}>{i + 1}</button>
          ))}
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)} className="w-8 h-8 rounded-full border flex items-center justify-center disabled:opacity-50">&gt;</button>
        </div>
      </main>
    </div>

    <Footer />
    </>
  );
};

export default ShopPage; 