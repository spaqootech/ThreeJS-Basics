import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

function App() {
  return (
    <main className='h-[100vh] bg-gray-100'>
      <Canvas camera={{position:[3,3,3]}}>
        <OrbitControls/>
        <mesh>
          <boxGeometry args={[3,3,3]}/>
          <meshNormalMaterial/>
        </mesh>
      </Canvas>
    </main>
  )
}

export default App