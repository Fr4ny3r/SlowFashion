import ProductList from './ProductList';
import FilterBar from './FilterBar';



function ProductsSection( {getFilteredProducts, handleFilterChange, filters}: any ) {

  return (
    <main className="p-10 my-30 bg-gray-100">

      <div className="store-container">
      
      <FilterBar onFilterChange={handleFilterChange} currentFilters={filters} />
      
      <div className="product-display">
        {/* Renderiza los productos filtrados */}
        <ProductList products={getFilteredProducts()} />
      </div>
    </div>
    </main>
  )
}

export default ProductsSection;