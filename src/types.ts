// src/types.ts

// 1. Tipos para las categorías fijas
export type Category = 'Jewelrys' | 'Clothes' | 'Fragrance' | 'All';

// 2. Interfaz principal para el Producto
export interface Product {
  id: number;
  name: string;
  img: string;
  category: Category; // Usamos el tipo Category definido arriba
  subcategory: string;
  price: number;
  stock: number;
  tags: string[];
  isFeatured: boolean;
  isOffer: boolean;
  discountPercentage?: number; // Opcional, solo si es oferta
  // Añade más campos según sea necesario
  // Puedes añadir más campos, ej: imageUrl: string;
}

// 3. Interfaz para el estado de los filtros
export interface Filters {
  category: Category;
  searchTerm: string;
}