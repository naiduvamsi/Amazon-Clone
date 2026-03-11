import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="bg-white p-4 z-30 flex flex-col relative hover:scale-[1.02] transition-transform duration-200 shadow-sm hover:shadow-lg rounded-md border border-transparent">
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 text-white px-4 py-2 rounded-md shadow-xl text-sm font-medium z-50 flex items-center whitespace-nowrap animate-fade-in-out">
          <span className="text-green-400 mr-2">✓</span> Added to cart
        </div>
      )}

      <div className="w-full h-48 mb-4 overflow-hidden rounded group relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain p-2 mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex flex-col flex-1">
        <p className="text-xs text-blue-600 font-semibold mb-1 uppercase tracking-wider">{product.category}</p>
        <h3 className="line-clamp-2 text-sm lg:text-base font-medium mb-1 hover:text-orange-600 transition-colors cursor-pointer">
          {product.title}
        </h3>
        
        <div className="flex items-center mb-2">
          {Array(5).fill().map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < Math.floor(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
            />
          ))}
          <span className="text-blue-500 text-sm ml-2 font-medium hover:underline cursor-pointer">{product.reviews}</span>
        </div>

        <div className="text-2xl font-semibold mb-3">
          <span className="text-sm font-normal align-top">$</span>
          {Math.floor(product.price)}
          <span className="text-sm font-normal align-top">
            {(product.price % 1).toFixed(2).substring(1)}
          </span>
        </div>

        <button 
          onClick={handleAddToCart}
          className="mt-auto bg-amazon-accent text-black font-semibold rounded-full py-2 px-4 shadow-[0_2px_5px_0_rgba(213,217,217,.5)] hover:bg-[#F3A847] active:bg-[#e3962d] active:shadow-inner transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
