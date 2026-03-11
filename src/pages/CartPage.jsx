import { useContext } from 'react';
import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, subtotal, totalItems } = useContext(CartContext);

  return (
    <div className="bg-[#EAEDED] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-[1500px] w-full mx-auto p-4 flex flex-col lg:flex-row gap-4">
        {/* Cart Items List */}
        <div className="flex-1 bg-white p-6 md:p-8 rounded-md shadow-sm">
          <h1 className="text-3xl font-normal border-b border-gray-200 pb-2 mb-4">Shopping Cart</h1>
          
          {cart.length === 0 ? (
            <div className="py-8">
              <h2 className="text-xl font-bold mb-4">Your Amazon Cart is empty.</h2>
              <p className="text-sm max-w-md mb-8">
                Your Shopping Cart lives to serve. Give it purpose — fill it with groceries, clothing, household supplies, electronics, and more.
              </p>
              <Link to="/" className="text-[#007185] hover:text-[#C40000] hover:underline">
                Continue shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="hidden sm:flex justify-end text-sm text-gray-500 border-b border-gray-200 pb-2 mb-4">
                Price
              </div>
              
              <div className="flex flex-col">
                 {cart.map((item) => (
                   <CartItem key={item.id} item={item} />
                 ))}
              </div>

              <div className="flex justify-end text-lg py-4">
                Subtotal ({totalItems} item{totalItems !== 1 && 's'}): <span className="font-bold ml-2">${subtotal.toFixed(2)}</span>
              </div>
            </>
          )}
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-80 flex flex-col gap-4">
          <div className="bg-white p-6 rounded-md shadow-sm">
            {/* Free Shipping Progress */}
            <div className="mb-4 text-sm text-green-700">
              <span className="font-bold">✓</span> Your order is eligible for FREE Delivery.
            </div>

            <h2 className="text-lg mb-4">
              Subtotal ({totalItems} item{totalItems !== 1 && 's'}): <span className="font-bold">${subtotal.toFixed(2)}</span>
            </h2>

            <button 
              className={`w-full py-2 px-4 rounded-full shadow-[0_2px_5px_0_rgba(213,217,217,.5)] font-medium mb-4 transition-all duration-200 ${
                cart.length > 0 
                  ? 'bg-[#FFD814] hover:bg-[#F7CA00] active:bg-[#F2C200] active:shadow-inner text-black' 
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              disabled={cart.length === 0}
            >
              Proceed to checkout
            </button>
          </div>

          <div className="bg-white p-4 rounded-md shadow-sm border border-gray-200 text-sm">
            <h3 className="font-bold mb-2">Customers who bought items in your Recent History also bought</h3>
            <p className="text-gray-500 italic mt-4 text-center">No recommendations at this time</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartPage;
