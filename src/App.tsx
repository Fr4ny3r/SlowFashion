import Model from './canvas/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Navv from './Nav.tsx'
import CardProduct from './CardProduct.tsx'
import OffersCard from './OffersCards.tsx'
import './App.css'


function App() {


    const OffersProducts = [
      {
        name : "Zapatos Adidas",
        desc : "asdasd",
        price: "12",
        stock: "10",
        img : "https://images.unsplash.com/photo-1551116198-01d550c9809c?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Camisa Marron",
        desc : "Manga larga",
        price: "12",
        stock: "10",
        img : "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Air Force 1",
        desc : "Zapatilla OFF WHITE x Nike",
        price: "12",
        stock: "10",
        img : "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Product1",
        desc : "dddd",
        price: "12",
        stock: "10",
        img : "https://images.unsplash.com/photo-1723391962154-8a2b6299bc09?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Product1",
        desc : "    asdasd",
        price: "12",
        stock: "10",
        img : "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Product1",
        desc : "asdas",
        price: "12",
        stock: "10",
        img : "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    ]


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


  return (
    <>
    <Navv />
    <header style={{opacity: "60%"}} className="h-[80vh] relative flex justify-around items-center">
    <img className="contrast-130 absolute top-0 w-full" src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <div className="relative font-bold z-2 text-white scale-[1.1]">
      <h1 className="text-7xl font-black -ml-10">F.Slow_</h1>
      <p className="text-2xl pl-[10px] max-w-[300px] mt-5">It's here, just enjoy the art of the moment and the most essential pieces of your life.</p>
    </div>
    <div className="obj3D"> 
    { //<Canvas style={{position: "absolute"}}>
     // <Stage environment="city" intensity={0.6}>
     //   <Model scale={0.5} />
     // </Stage>
     // <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0} />
    //</Canvas>
    }
    </div>


    </header>
    <div className="flex -translate-y-50 justify-around text-[#1f1135] relative w-9/12 gap-5 p-5">
      <CardProduct
        products={Categories}
      />     
      <div></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="400" height="400" role="img" aria-label="Rosa minimalista blanca">
    <g fill="none" stroke="#000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M100 60
               C88 50, 72 52, 68 68
               C64 86, 84 96, 96 94
               C108 92, 112 80, 100 60
               Z"/>
      <path d="M100 68
               C110 58, 128 60, 132 76
               C136 94, 118 104, 106 102
               C104 90, 100 78, 100 68
               Z"/>
      <path d="M100 84
               C98 88, 94 96, 100 108
               C106 96, 102 88, 100 84
               Z"/>

      {/*<!-- Tallo simple -->*/}
      <path d="M100 110
               Q98 140, 96 166
               " />

      {/*<!-- Hoja minimal -->*/}
      <path d="M98 130
               C84 124, 74 116, 70 132
               C74 128, 86 132, 98 130Z"/>
    </g>
  </svg>

    <main
      className="siShadow relative bg-red-200 text-6xl p-8"

    >
      <span className=""> </span>
      <span className="absolute top-0 right-0 mr-10 text-4xl mx- bg-[#fbdd74] p-3 -translate-y-1/2">Take advantage of the offers</span>
      <h1 className="mt-10 ml-10">OFFERS</h1>
      <div className="flex gap-5 justify-around items-center flex-wrap py-10">
        <OffersCard
          products={OffersProducts}
        />
      </div>
    </main>
    <main className="h-69"></main>
    </>
  )
}



export default App
