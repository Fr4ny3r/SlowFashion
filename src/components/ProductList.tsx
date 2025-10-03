// src/components/FeaturedProducts.js
import React from 'react';
import ProductCard from './ProductCard'; // Reutilizar el componente de tarjeta

function ProductList({ products }) {
  // Filtra la lista para obtener solo los destacados
  const featured = products.filter(product => product.isFeatured);

  return (
    <section className="featured-section">
      <h2>✨ Destacados de F.Slow</h2>
      <div className="product-grid">
        {featured.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;