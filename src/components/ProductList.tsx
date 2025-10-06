// src/components/FeaturedProducts.jsx
import type { Product, Filters, Category } from '../types';
import ProductCard from './ProductCard'; // Reutilizar el componente de tarjeta

function ProductList({ products } : { products: Product[] }) {
  // Filtra la lista para obtener solo los destacados

  
  const featured = products.filter(product => (product.isFeatured && product.name != ""));

  return (
    <section className="featured-section">
      <h2>Fake store the items shown are not for sale.</h2>
      <div className="product-grid flex gap-5 justify-around pb-30 items-center flex-wrap py-10">
        {featured.map(product => (
          <ProductCard products={product}/>
        ))}
      </div>
    </section>
  );
}

export default ProductList;