import Model from './canvas/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Navv from './Nav.tsx'
import './App.css'


function App() {

  return (
    <>
    <header style={{overflowY: "hidden", opacity: "60%"}} className="h-[80vh] flex justify-around items-center">
    <Navv />
    <img className=" absolute top-0 w-full" src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <div className="relative font-bold z-2 text-white">
      <h1 className="text-7xl font-black">F.Slow_</h1>
      <p className="text-2xl pl-[10px] max-w-[300px] mt-5">It's here, just enjoy the art of the moment and the most precious accessories of your life.</p>
    </div>
    <div> 
    <Canvas style={{position: "absolute"}}>
      <Stage environment="city" intensity={0.6}>
        <Model scale={0.5} />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0} />
    </Canvas>   
    </div>


    </header>
    </>
  )
}



export default App
