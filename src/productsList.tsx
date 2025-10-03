// src/App.js
import React, { useState, useEffect } from 'react';
import productsData from './products.json'; // Importa tu JSON
import ProductList from './components/ProductList';
import FilterBar from './components/FilterBar';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: 'All', searchTerm: '' });
  
  // 1. Cargar datos una vez
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // 2. Lógica de Filtración
  const getFilteredProducts = () => {
    // 1. Filtrar por Categoría
    let filtered = products.filter(product => 
      filters.category === 'All' || product.category === filters.category
    );

    // 2. Filtrar por Búsqueda (Search Term)
    if (filters.searchTerm) {
      const lowerCaseSearch = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearch) ||
        product.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch))
      );
    }
    
    return filtered;
  };

  // Función para manejar los cambios de filtro
  const handleFilterChange = (newFilters) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      ...newFilters
    }));
  };

  return (
    <div className="store-container">
      <h1>Tienda F.Slow</h1>
      
      <FilterBar onFilterChange={handleFilterChange} currentFilters={filters} />
      
      <div className="product-display">
        {/* Renderiza los productos filtrados */}
        <ProductList products={getFilteredProducts()} />
      </div>
    </div>
  );
}

export default App;