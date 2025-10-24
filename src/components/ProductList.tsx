import { useState } from 'react';
import type { Product } from '../types';
import ProductCard from './ProductCard';

function ProductList({
  products,
  activeCart,
  setActiveCart,
  cart,
  setCart,
  addToCart,
  removeFromCart,
}: {
  products: Product[];
  activeCart: any;
  setActiveCart: any;
  cart: any;
  setCart: any;
  addToCart: (item: any) => void;
  removeFromCart: (_: any, i: number) => void;
}) {
  // Filtra los productos destacados
  const featured = products.filter(
    (product) => product.isFeatured && product.name !== ''
  );

  // --- 🔹 Paginación ---
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(featured.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = featured.slice(startIndex, startIndex + productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // --- 🔹 Render ---
  return (
    <section className="featured-section flex flex-col items-center">
      <h2>Fake store — the items shown are not for sale.</h2>

      <div className="product-grid flex gap-5 justify-around pb-30 items-center flex-wrap py-10">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            products={product}
            activeCart={activeCart}
            setActiveCart={setActiveCart}
            cart={cart}
            setCart={setCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      {/* 🔹 Controles de paginación */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center mt-6 space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === 1
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-200'
            }`}
          >
            ⬅ Anterior
          </button>

          <span className="text-lg font-bold text-[#1f1135]">
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === totalPages
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-200'
            }`}
          >
            Siguiente ➡
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductList;
