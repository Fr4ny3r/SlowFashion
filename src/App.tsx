import Model from './canvas/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Navv from './Nav.tsx'
import CardProduct from './CardProduct.tsx'
import './App.css'


function App() {


    const products = [
      {
        name : "Diamond",
        desc : "It's Just a Diamond",
        price: "10",
        img : "./product2.png"
      },
      {
        name : "Emerald",
        desc : "It's Just a Emerald",
        price: "10",
        img : "./emerald.png"
      },
      {
        name : "Ruby",
        desc : "It's Just a Ruby",
        price: "10",
        img : "./ruby.png"
      }
    ]


  return (
    <>
    <Navv />
    <header style={{opacity: "60%"}} className="h-[80vh] relative flex justify-around items-center">
    <img className="contrast-130 absolute top-0 w-full" src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <div className="relative font-bold z-2 text-white scale-[1.1]">
      <h1 className="text-7xl font-black -ml-10">F.Slow_</h1>
      <p className="text-2xl pl-[10px] max-w-[300px] mt-5">It's here, just enjoy the art of the moment and the most precious accessories of your life.</p>
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
        products={products}
      />     
      <div></div>
    </div>
    </>
  )
}



export default App
