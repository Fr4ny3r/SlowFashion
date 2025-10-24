import ProductList from './ProductList';
import FilterBar from './FilterBar';
import type { Filters, Product } from '../types';




function ProductsSection( { activeCart, setActiveCart, cart, setCart, addToCart, removeFromCart, getFilteredProducts, handleFilterChange, filters } : { activeCart: any, setActiveCart: any, cart: any, setCart: any, addToCart : (item : any) => void, removeFromCart : (_ : any, i : number) => void, getFilteredProducts : () => Product[], handleFilterChange : (newFilters : any)=> void,  filters : Filters} ) {

  return (
    <main className="p-10 my-30 bg-gray-100">

      <div className="store-container">
      
      <FilterBar onFilterChange={handleFilterChange} currentFilters={filters} />
      
      <div className="product-display">
        {/* Renderiza los productos filtrados */}
        <ProductList products={getFilteredProducts()} activeCart={activeCart} setActiveCart={setActiveCart} cart={cart} setCart={setCart} addToCart={addToCart} removeFromCart={removeFromCart} />
      </div>
    </div>
    </main>
  )
}

export default ProductsSection;