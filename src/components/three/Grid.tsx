import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function AnimatedGrid() {
  const ref = useRef<THREE.GridHelper>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.position.z = (t * 0.5) % 2
    }
  })

  return (
    <gridHelper
      ref={ref}
      args={[100, 50, 0x3b82f6, 0x1a1a2e]}
      position={[0, -12, 0]}
    >
      <meshBasicMaterial transparent opacity={0.08} />
    </gridHelper>
  )
}
