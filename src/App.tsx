import React, { useState, useEffect } from 'react';
import type { Product, Filters, Category } from './types';
import { supabase } from './components/supabase.js';
import Navv from './components/Nav.tsx'
import Hero from './components/Hero.tsx'
import CardProduct from './components/CardProduct.tsx'
import OffersCards from './components/OffersCards.tsx'
import About from './components/About.tsx';
import EndPage from './components/EndPage.tsx'
import ProductsSection from './components/ProductsSection.tsx'
//import productsData from './products.json';
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

      const [products, setProducts] = useState<Product[]>([]);
      const [productsData, setProductsData] = useState<Product[]>([]);
      const [isLoading, setIsLoading] = useState(true);
      const [error, setError] = useState(null);
      const [filters, setFilters] = useState<Filters>(initialFilters);
      const [activeCart, setActiveCart] = useState<boolean>(false);
      const [cart, setCart] = useState<Product[]>([]);
      
      const API_URL = "https://api.sheetbest.com/sheets/dacbb681-79d3-4bf1-b2ce-61fb72027a46";

      useEffect(() => {


      const fetchProducts = async () => {
            try {
              // const response = await fetch(API_URL);

              const { data, error } = await supabase
                .from('productos')
                .select('*');

              if (error) {
                throw error;
              }

              console.log("Supabase Data:", data);

              setProducts(
                data.map((product: any) => ({
                  ...product,
                  price: typeof product.price === "string" ? Number(product.price) : product.price,
                  stock: typeof product.stock === "string" ? Number(product.stock) : product.stock,

                  tags: typeof product.tags === 'string' ? product.tags.split(", ") : [],
                })) as Product[]
              );


            } catch (err : any) {
              // Manejo de errores de red o del servidor
              setError(err.message);
            } finally {
              // Indica que la carga ha terminado
              setIsLoading(false);
            }
          };
        
          fetchProducts();

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

  const addToCart = (item : any) => {
    setCart([...cart, item]); // Add item to cart
  };

  const removeFromCart = (index : number) => {
    const updatedCart = cart.filter((_ : any, i : number) => i !== index);
    setCart(updatedCart); // Remove item from cart
  };

console.log("Products Data:", products);

  return (
    <>
    <Navv activeCart={activeCart} setActiveCart={setActiveCart} cart={cart} setCart={setCart} addToCart={addToCart} removeFromCart={removeFromCart}/>
    <Hero />
    <CardProduct products={Categories}/>     
    <OffersCards products={products.filter(p => p.isOffer && p.discountPercentage)}/>
    <About />
    <ProductsSection activeCart={activeCart} setActiveCart={setActiveCart} cart={cart} setCart={setCart} addToCart={addToCart} removeFromCart={removeFromCart} getFilteredProducts={getFilteredProducts} handleFilterChange={handleFilterChange} filters={filters} />
    <EndPage />
    </>
  )
}



export default App
