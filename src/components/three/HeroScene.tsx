import { Canvas } from '@react-three/fiber'
import { FloatingShapes } from './FloatingShapes'
import { Particles } from './Particles'
import { AnimatedGrid } from './Grid'
import { MouseCamera } from './MouseCamera'
import { NetworkLines } from './NetworkLines'

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 75 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <MouseCamera />

      {/* Lighting */}
      <ambientLight intensity={0.3} color="#3b82f6" />
      <pointLight position={[20, 20, 20]} intensity={1.5} color="#3b82f6" distance={80} />
      <pointLight position={[-20, -10, 15]} intensity={1.2} color="#8b5cf6" distance={80} />
      <pointLight position={[0, -20, 10]} intensity={0.8} color="#06b6d4" distance={60} />

      {/* 3D Objects */}
      <FloatingShapes />
      <Particles count={80} />
      <AnimatedGrid />
      <NetworkLines />
    </Canvas>
  )
}
