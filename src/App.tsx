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
        name : "Adidas shoes",
        desc : "White shoes with black lines",
        price: "45",
        stock: "68",
        img : "https://images.unsplash.com/photo-1551116198-01d550c9809c?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Sapphire necklace",
        desc : "Brilliant sapphire, large with gold chain",
        price: "423",
        stock: "8",
        img : "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Air Force 1",
        desc : "Zapatilla OFF WHITE x Nike",
        price: "74",
        stock: "28",
        img : "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Perfume for men",
        desc : "Fragrant masculine scent",
        price: "134",
        stock: "10",
        img : "https://images.unsplash.com/photo-1723391962154-8a2b6299bc09?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Perfume for women",
        desc : "Fragrant feminine scent",
        price: "156",
        stock: "7",
        img : "https://images.unsplash.com/photo-1613521140785-e85e427f8002?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name : "Gold earrings",
        desc : "Thin, gold-plated",
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
  
    <main
      className="siShadow relative bg-red-200 text-6xl p-8"

    >
      <span className=""> </span>
      <span className="absolute top-0 right-0 mr-10 text-4xl mx- bg-[#fbdd74] p-3 -translate-y-1/2">Take advantage of the offers</span>
      <h1 className="mt-10 ml-10">OFFERS</h1>
      <div className="flex gap-5 justify-around pb-30 items-center flex-wrap py-10">
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
