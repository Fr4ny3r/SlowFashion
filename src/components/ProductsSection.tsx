import ProductList from './ProductList';
import FilterBar from './FilterBar';



function ProductsSection( {getFilteredProducts, handleFilterChange, filters}: any, { activeCart, setActiveCart, cart, setCart, addToCart, removeFromCart } : { activeCart: any, setActiveCart: any, cart: any, setCart: any, addToCart : (item : any) => void, removeFromCart : (_ : any, i : number) => void } ) {

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