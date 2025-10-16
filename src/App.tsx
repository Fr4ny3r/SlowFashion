import React, { useState, useEffect } from 'react';
import type { Product, Filters, Category } from './types';
import ProductList from './components/ProductList';
import FilterBar from './components/FilterBar';
import { Model } from './canvas/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Navv from './Nav.tsx'
import CardProduct from './CardProduct.tsx'
import OffersCard from './OffersCards.tsx'
import productsData from './products.json';
import OffersProducts from './OffersProducts.json';
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
    <header id='decoration-titles' style={{opacity: "60%"}} className="h-[80vh] relative flex justify-around items-center">
    <img className="contrast-130 absolute top-0 w-full" src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <div className="relative font-bold z-2 text-white scale-[1.1]">
      <h1 className="text-7xl font-black -ml-10">F.Slow_</h1>
      <p className="text-2xl pl-[10px] max-w-[300px] mt-5">It's here, just enjoy the art of the moment and the most essential pieces of your life.</p>
    </div>
    <div className="obj3D"> 
    
    <Canvas
      className="z-50"
      style={{position: "absolute" , top: "0", right: "0", width: "50vw", height: "80vh"}}
     >
      <Stage environment={"sunset"} intensity={0.6} shadows={false} adjustCamera={true}>
        <Model scale={0.4} rotation={[Math.PI / 4, Math.PI / 4, 0]}/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotateSpeed={0} />
    </Canvas>
    </div>  
  
    </header>
    <div className="flex -translate-y-50 justify-around text-[#1f1135] relative w-9/12 gap-5 p-5">
      <CardProduct
        products={Categories}
      />     
      <div></div>
    </div>

    <main
      className="siShadow relative bg-red-200 text-6xl p-8"

    >
      <span className=""> </span>
      <span className="absolute top-0 right-0 mr-10 text-4xl mx- bg-[#fbdd74] p-3 -translate-y-1/2">Take advantage of the offers</span>
      <h1 className="mt-10 ml-10">OFFERS</h1>
      <div className="flex gap-5 justify-around pb-30 items-center flex-wrap py-10">
        <OffersCard
          products={products.filter(p => p.isOffer)}
        />
      </div>
    </main>
    <main>
      <div id='other-title' className="my-30 h-[400px] bg-gray-300 text-6xl overflow-hidden relative">
        <img
          className='absolute contrast-130 img-titles z-1 w-full -translate-y-135 object-cover opacity-40 hover:scale-110 transition-[transform, scale] duration-2000'
          src='https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='image'
        />
        <div className='siShadow opacity-100 text-gray-100 relative z-10 p-10 text-[#1f1135] w-full h-full flex flex-col justify-center items-center'>
          <h1 className="text-7xl font-black left-0 -ml-7">F.Slow_</h1>
          <p className=" z-10000 text-2xl mt-5 text-center max-w-3xl">At F.Slow, we believe in the power of slow fashion to create a more sustainable and ethical world. Our mission is to provide high-quality, timeless pieces that not only make you look good but also make you feel good about your choices.</p>
        </div>
      </div>
    </main>
    <main className="p-10 my-30 bg-gray-100">
      <div className="store-container">
      
      <FilterBar onFilterChange={handleFilterChange} currentFilters={filters} />
      
      <div className="product-display">
        {/* Renderiza los productos filtrados */}
        <ProductList products={getFilteredProducts()} />
      </div>
    </div>
    </main>
    <footer>
      <div className="bg-[#1f1135] text-gray-200 p-10 flex justify-around flex-wrap gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Email: info@SlowFashion.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Fashion St, Style City, Country</p>
        </div>
        <div className="flex gap-5 mt-5 items-center justify-center">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
          <p className="mt-5 w-screen text-center">&copy; 2024 F.Slow. All rights reserved.</p>        
      </div>
    </footer>
    </>
  )
}



export default App
