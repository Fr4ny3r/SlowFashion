// src/types.ts

// 1. Tipos para las categorías fijas
export type Category = 'Joyería' | 'Ropa' | 'Fragancia' | 'All';

// 2. Interfaz principal para el Producto
export interface Product {
  id: number;
  name: string;
  category: Category; // Usamos el tipo Category definido arriba
  subcategory: string;
  price: number;
  stock: number;
  tags: string[];
  isFeatured: boolean;
  // Puedes añadir más campos, ej: imageUrl: string;
}

// 3. Interfaz para el estado de los filtros
export interface Filters {
  category: Category;
  searchTerm: string;
}