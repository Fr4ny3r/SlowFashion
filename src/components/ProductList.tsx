// src/components/FeaturedProducts.jsx
import type { Product, Filters, Category } from '../types';
import ProductCard from './ProductCard'; // Reutilizar el componente de tarjeta

function ProductList({ products } : { products: Product[] }) {
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