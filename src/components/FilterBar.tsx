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
        <div className="filter-bar-container">
            {/* 1. Filtro de Categoría */}
            <select onChange={handleCategoryChange} value={currentFilters.category}>
                <option value="All">Todas las Categorías</option>
                <option value="Joyería">Joyería</option>
                <option value="Clothes">Ropa</option>
                <option value="Fragancia">Fragancia</option>
            </select>

            {/* 2. Campo de Búsqueda */}
            <input
                type="text"
                placeholder="Buscar por nombre o etiqueta..."
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
            <button>
                Limpiar
            </button>
        </div>
  );
}

export default FilterBar;