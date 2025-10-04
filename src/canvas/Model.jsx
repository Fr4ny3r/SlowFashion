// src/canvas/Model.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { scene } = useGLTF('/diamond.glb');
  return <primitive object={scene} {...props} />;
}

useGLTF.preload('/diamond.glb');