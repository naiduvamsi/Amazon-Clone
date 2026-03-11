import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <div className="flex flex-col sm:flex-row py-4 border-b border-gray-200 bg-white">
      {/* Product Image */}
      <div className="w-full sm:w-1/4 max-w-[180px] mr-0 md:mr-4 flex-shrink-0 self-center sm:self-start">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-auto object-contain max-h-48 mix-blend-multiply"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 mt-4 sm:mt-0 flex flex-col px-4 sm:px-0">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium line-clamp-2 md:line-clamp-none flex-1 pr-4">{item.title}</h3>
          <p className="font-bold text-lg whitespace-nowrap">${item.price.toFixed(2)}</p>
        </div>
        
        <p className="text-green-700 text-xs mt-1">In Stock</p>
        <p className="text-sm mt-1 text-gray-500">Eligible for FREE Shipping</p>

        <div className="flex items-center mt-4">
          <div className="flex items-center bg-[#F0F2F2] rounded-full shadow-[0_2px_5px_0_rgba(213,217,217,.5)] mr-4 overflow-hidden border border-[#D5D9D9]">
            <button 
              onClick={() => decreaseQuantity(item.id)}
              className="px-3 py-1 hover:bg-gray-200 text-lg transition-colors"
            >
              -
            </button>
            <span className="px-3 font-semibold bg-white">{item.quantity}</span>
            <button 
              onClick={() => increaseQuantity(item.id)}
              className="px-3 py-1 hover:bg-gray-200 text-lg transition-colors"
            >
              +
            </button>
          </div>

          <div className="border-l border-gray-300 h-4 mx-4"></div>
          
          <button 
            onClick={() => removeFromCart(item.id)}
            className="text-sm text-[#007185] hover:text-[#C40000] hover:underline"
          >
            Delete
          </button>
          
          <div className="border-l border-gray-300 h-4 mx-4"></div>

          <button className="text-sm text-[#007185] hover:underline hidden sm:block">
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
