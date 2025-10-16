import { Model } from '../canvas/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';


function Hero(){
  return (
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
  )
}

export default Hero;