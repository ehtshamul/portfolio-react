import { Canvas } from '@react-three/fiber'
import { GlobalParticles } from './GlobalParticles'
import { FloatingTechIcons } from './FloatingTechIcons'

export default function GlobalScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[20, 20, 20]} intensity={0.5} color="#3b82f6" />
        <pointLight position={[-20, -10, 15]} intensity={0.3} color="#8b5cf6" />

        <GlobalParticles count={150} />
        <FloatingTechIcons />
      </Canvas>
    </div>
  )
}
