import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import { products as initialProducts } from '../data/products';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(initialProducts);
      setLoading(false);
    }, 800);
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setProducts(initialProducts);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = initialProducts.filter(
      (product) => product.title.toLowerCase().includes(lowerQuery)
    );
    setProducts(filtered);
  };

  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <Navbar onSearch={handleSearch} />
      
      <main className="max-w-[1500px] mx-auto w-full">
        {/* Hero Banner */}
        <div className="relative">
          <div className="w-full h-64 md:h-96 lg:h-[600px] bg-gradient-to-r from-cyan-800 to-blue-900 clip-path-bottom">
            <img 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop" 
              alt="Hero Banner" 
              className="w-full h-full object-cover mix-blend-overlay opacity-50"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4">
             <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">Shop the Latest Tech & Fashion</h1>
             <p className="text-lg md:text-xl drop-shadow-md">Find everything you need at unbeatable prices.</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#EAEDED] to-transparent pointer-events-none" />
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} loading={loading} />
      </main>

      {/* Footer */}
      <footer className="bg-amazon-light text-white text-center py-8 mt-10">
        <a href="#" className="bg-[#37475A] block py-4 hover:bg-[#485769] transition-colors mb-8">
          Back to top
        </a>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4 text-left">
          <div>
            <h4 className="font-bold mb-3">Get to Know Us</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Make Money with Us</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Sell products on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Amazon Payment Products</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Let Us Help You</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex items-center justify-center">
            <span className="text-2xl font-bold tracking-tighter mr-2">amazon</span> mini
        </div>
      </footer>
    </div>
  );
};

export default Home;
