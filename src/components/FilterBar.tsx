// src/components/FilterBar.tsx
import React from 'react';
import type { Filters, Category } from '../types';

// Definimos la interfaz para las PROPS de este componente
interface FilterBarProps {
  onFilterChange: (newFilters: Partial<Filters>) => void;
  currentFilters: Filters;
}

// Usamos React.FC<NombreDeLaInterfaz>
const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange, currentFilters }) => {
  
  // Usamos el tipo Category para definir las opciones

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // TypeScript sabe que el valor es una Category
    onFilterChange({ category: event.target.value as Category }); 
  };
  
  // ... (otros handlers)

  return (
        <div
          style={{boxShadow: "5px 8px 1px 1px rgba(0, 0, 0, 0.6)"}}
          className="filter-bar-container text-xl p-4 mb-6 flex flex-wrap gap-4 justify-around items-center"
          >
            {/* 1. Filtro de Categoría */}
            <select
              className='p-2 rounded'
              onChange={handleCategoryChange}
              value={currentFilters.category}
            >
                <option value="All">All categories</option>
                <option value="Jewelrys">Jewelrys</option>
                <option value="Clothes">Clothes</option>
                <option value="Fragance">Fragance</option>
            </select>

            {/* 2. Campo de Búsqueda */}
            <input
                className='p-2 rounded bg-gray-200 text-black'
                type="text"
                placeholder="Search by name or tag..."
                value={currentFilters.searchTerm}
                onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
            />

            {/* 3. Ordenamiento (Sort) - Implementación más avanzada */}
            <select>
                <option value="default">Ordenar por...</option>
                <option value="price-asc">Precio: Más bajo</option>
                <option value="price-desc">Precio: Más alto</option>
                <option value="newest">Más reciente</option>
            </select>
            
            {/* 4. Botón de Limpiar */}
            <button className='py-2 px-10 hover:cursor-pointer bg-black text-white hover:bg-white hover:text-black transition'>
                Clear
            </button>
        </div>
  );
}

export default FilterBar;