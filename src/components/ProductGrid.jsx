import ProductCard from './ProductCard';

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 -mt-10 lg:-mt-48 xl:-mt-64 relative z-20 pb-10">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white p-4 h-[400px] rounded-md animate-pulse">
            <div className="bg-gray-200 w-full h-48 mb-4 rounded"></div>
            <div className="bg-gray-200 w-3/4 h-4 mb-2"></div>
            <div className="bg-gray-200 w-1/2 h-4 mb-2"></div>
            <div className="bg-gray-200 w-1/4 h-6 mt-4"></div>
            <div className="bg-gray-300 w-full h-10 mt-auto rounded-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-white m-4 p-8 text-center rounded-md min-h-[400px] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2">No results for this search</h2>
        <p className="text-gray-500">Try checking your spelling or use more general terms</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 -mt-10 lg:-mt-32 xl:-mt-64 relative z-20 pb-10 max-w-[1500px] mx-auto">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
