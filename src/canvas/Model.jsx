import { useGLTF } from '@react-three/drei';

useGLTF.preload('/public/diamond.glb');


const Model = ({ scale }) => {

  const { scene } = useGLTF('/public/diamond.glb');
  
  
  return <>
    <group>
      <primitive object={scene} scale={scale} />
    </group>
  
  </>;
};

export default Model;
