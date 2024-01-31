import { AmbientLight } from "three";
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Scene() {
    const gltf = useLoader(GLTFLoader, '/model.gltf')
    const scale = 200

    return <>
      <primitive object={gltf.scene} position={[0,-50,-100]} scale={scale}/>
      <ambientLight intensity={0.5}/>
      <pointLight position={[10,10,10]} intensity={1} />
      <OrbitControls />
    </>
   }

export default Scene;   