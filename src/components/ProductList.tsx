// src/components/FeaturedProducts.jsx
import type { Product, Filters, Category } from '../types';
import ProductCard from './ProductCard'; // Reutilizar el componente de tarjeta

function ProductList({ products, activeCart, setActiveCart, cart, setCart, addToCart, removeFromCart } : { products: Product[], activeCart: any, setActiveCart: any, cart: any, setCart: any, addToCart : (item : any) => void, removeFromCart : (_ : any, i : number) => void }) {
  // Filtra la lista para obtener solo los destacados

  
  const featured = products.filter(product => (product.isFeatured && product.name != ""));

  return (
    <section className="featured-section">
      <h2>Fake store the items shown are not for sale.</h2>
      <div className="product-grid flex gap-5 justify-around pb-30 items-center flex-wrap py-10">
        {featured.map(product => (
          <ProductCard products={product} activeCart={activeCart} setActiveCart={setActiveCart} cart={cart} setCart={setCart} addToCart={addToCart} removeFromCart={removeFromCart}/>
        ))}
      </div>
    </section>
  );
}

export default ProductList;