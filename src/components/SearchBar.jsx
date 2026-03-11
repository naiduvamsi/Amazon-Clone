import { useState, useContext } from 'react';
import { Search } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 max-w-3xl h-10 ml-4 rounded-md overflow-hidden bg-white">
      <select className="bg-gray-100 border-r border-gray-300 px-2 text-sm text-gray-700 outline-none hover:bg-gray-200 cursor-pointer hidden md:block">
        <option>All</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Home</option>
      </select>
      <input
        type="text"
        placeholder="Search Amazon"
        className="flex-1 px-3 text-black outline-none"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (onSearch) onSearch(e.target.value);
        }}
      />
      <button 
        type="submit" 
        className="bg-amazon-accent px-3 hover:bg-[#f3a847] transition-colors flex items-center justify-center cursor-pointer text-black"
        aria-label="Search"
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
