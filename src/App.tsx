import React, { useState, useEffect } from 'react';
import type { Product, Filters, Category } from './types';
import Navv from './components/Nav.tsx'
import Hero from './components/Hero.tsx'
import CardProduct from './components/CardProduct.tsx'
import OffersCards from './components/OffersCards.tsx'
import About from './components/About.tsx';
import EndPage from './components/EndPage.tsx'
import ProductsSection from './components/ProductsSection.tsx'
import productsData from './products.json';
import './App.css'




    const Categories = [
      {
        name : "Types of Jewelry",
        desc : "Rings, Necklaces, Bracelets, Earrings.",
        price: "New",
        img : "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Clothes",
        desc : "Fashion, and important models.",
        price: "New",
        img : "https://images.unsplash.com/photo-1738680722152-88b45b3310ab?q=80&w=749&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Fragrance",
        desc : "Impregnate your scent in every corner.",
        price: "New",
        img : "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]

    const initialFilters: Filters = { category: 'All', searchTerm: '' };

    const App: React.FC = () => {
      // 1. Tipamos el estado de los productos
      const [products, setProducts] = useState<Product[]>([]);
      // 2. Tipamos el estado de los filtros
      const [filters, setFilters] = useState<Filters>(initialFilters);
      const [cart, setCart] = useState([]);
      
      useEffect(() => {
        // TypeScript sabe que productsData es Product[]
        setProducts(
          productsData.map((product: any) => ({
            ...product,
            price: typeof product.price === "string" ? Number(product.price) : product.price,
            stock: typeof product.stock === "string" ? Number(product.stock) : product.stock
          })) as Product[]
        );
      }, []);

      // La función de filtrado es la misma, pero TypeScript te ayuda
      const getFilteredProducts = (): Product[] => {
        let filtered: Product[] = products.filter(product => 
          filters.category === 'All' || product.category === filters.category
        );

        if (filters.searchTerm) {
          const lowerCaseSearch = filters.searchTerm.toLowerCase();
          filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(lowerCaseSearch) ||
            product.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearch))
          );
        }
        
        return filtered;
      };

      // Tipamos el argumento de la función de cambio de filtro
      const handleFilterChange = (newFilters: Partial<Filters>) => {
        setFilters(prevFilters => ({
          ...prevFilters,
          ...newFilters
        }));
      };




  return (
    <>
    <Navv />
    <Hero />
    <CardProduct products={Categories}/>     
    <OffersCards products={products.filter(p => p.isOffer)}/>
    <About />
    <ProductsSection getFilteredProducts={getFilteredProducts} handleFilterChange={handleFilterChange} filters={filters} />
    <EndPage />
    </>
  )
}



export default App
