import { Link } from 'react-router-dom';
import { ShoppingCart, MapPin, Menu } from 'lucide-react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import SearchBar from './SearchBar';

const Navbar = ({ onSearch }) => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="bg-amazon text-white flex flex-col pt-2 w-full top-0 z-50 sticky">
      <div className="flex items-center px-4 pb-2 space-x-4">
        {/* Logo */}
        <Link to="/" className="flex items-center text-xl font-bold border border-transparent hover:border-white p-1 rounded">
          <span className="text-2xl tracking-tighter">amazon</span>
        </Link>

        {/* Deliver to */}
        <div className="hidden sm:flex items-center border border-transparent hover:border-white p-1 rounded cursor-pointer">
          <MapPin size={18} className="mt-2" />
          <div className="ml-1 flex flex-col">
            <span className="text-[11px] text-gray-300 leading-tight">Deliver to</span>
            <span className="text-sm font-bold leading-tight">Location</span>
          </div>
        </div>

        {/* Search */}
        <SearchBar onSearch={onSearch} />

        {/* Accounts & Lists */}
        <div className="hidden md:flex flex-col border border-transparent hover:border-white p-1 rounded cursor-pointer whitespace-nowrap">
          <span className="text-[11px] leading-tight">Hello, sign in</span>
          <span className="text-sm font-bold leading-tight">Account & Lists</span>
        </div>

        {/* Returns & Orders */}
        <div className="hidden lg:flex flex-col border border-transparent hover:border-white p-1 rounded cursor-pointer whitespace-nowrap">
          <span className="text-[11px] leading-tight">Returns</span>
          <span className="text-sm font-bold leading-tight">& Orders</span>
        </div>

        {/* Cart */}
        <Link to="/cart" className="flex items-center border border-transparent hover:border-white p-1 rounded relative">
          <div className="relative flex items-center">
            <ShoppingCart size={32} />
            <span className="absolute top-0 right-[-8px] font-bold text-amazon-accent bg-transparent px-1 rounded-full text-base">
              {totalItems}
            </span>
          </div>
          <span className="hidden sm:inline-block font-bold mt-3 ml-2">Cart</span>
        </Link>
      </div>

      {/* Subnav */}
      <div className="bg-amazon-light py-1 px-4 flex items-center space-x-4 text-sm whitespace-nowrap overflow-x-auto no-scrollbar">
        <div className="flex items-center font-bold cursor-pointer border border-transparent hover:border-white p-1 rounded">
          <Menu size={20} className="mr-1" /> All
        </div>
        <div className="cursor-pointer border border-transparent hover:border-white p-1 rounded">Today's Deals</div>
        <div className="cursor-pointer border border-transparent hover:border-white p-1 rounded">Customer Service</div>
        <div className="cursor-pointer border border-transparent hover:border-white p-1 rounded">Registry</div>
        <div className="cursor-pointer border border-transparent hover:border-white p-1 rounded">Gift Cards</div>
        <div className="cursor-pointer border border-transparent hover:border-white p-1 rounded">Sell</div>
      </div>
    </nav>
  );
};

export default Navbar;
