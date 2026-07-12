import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function FloatingTechIcons() {
  return (
    <group>
      <TechOrb position={[-15, 10, -20]} color="#3b82f6" speed={0.5} size={1.5} />
      <TechOrb position={[18, -8, -25]} color="#8b5cf6" speed={0.7} size={1.2} />
      <TechOrb position={[-10, -15, -18]} color="#06b6d4" speed={0.6} size={1.8} />
      <TechOrb position={[12, 12, -22]} color="#2563eb" speed={0.4} size={1.0} />
      <TechOrb position={[0, -20, -30]} color="#8b5cf6" speed={0.8} size={2.0} />
      <TechOrb position={[-20, 0, -15]} color="#3b82f6" speed={0.3} size={1.3} />
      <FloatingRing position={[15, 5, -28]} color="#06b6d4" speed={0.4} size={3} />
      <FloatingRing position={[-12, -10, -35]} color="#8b5cf6" speed={0.3} size={4} />
      <FloatingTorusKnot position={[8, -5, -40]} color="#3b82f6" speed={0.2} />
      <NetworkSphere position={[0, 0, -50]} />
    </group>
  )
}

function TechOrb({ position, color, speed, size }: {
  position: [number, number, number]
  color: string
  speed: number
  size: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * speed
      ref.current.rotation.y = t * speed * 1.3
      ref.current.position.y = position[1] + Math.sin(t * speed) * 2
      ref.current.position.x = position[0] + Math.cos(t * speed * 0.7) * 1
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.3}
        roughness={0.2}
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  )
}

function FloatingRing({ position, color, speed, size }: {
  position: [number, number, number]
  color: string
  speed: number
  size: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * speed
      ref.current.rotation.z = t * speed * 0.5
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[size, 0.05, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  )
}

function FloatingTorusKnot({ position, color, speed }: {
  position: [number, number, number]
  color: string
  speed: number
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * speed
      ref.current.rotation.y = t * speed * 1.5
      ref.current.position.y = position[1] + Math.sin(t * speed * 2) * 3
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <torusKnotGeometry args={[2, 0.3, 128, 16]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.4}
        roughness={0.1}
        transparent
        opacity={0.08}
        wireframe
      />
    </mesh>
  )
}

function NetworkSphere({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null)

  const nodes = useMemo(() => {
    const result: { pos: [number, number, number]; connected: number[] }[] = []
    for (let i = 0; i < 20; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 8
      result.push({
        pos: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi),
        ],
        connected: [],
      })
    }
    // Create connections
    for (let i = 0; i < result.length; i++) {
      const numConnections = Math.floor(Math.random() * 3) + 1
      for (let j = 0; j < numConnections; j++) {
        const target = Math.floor(Math.random() * result.length)
        if (target !== i) result[i].connected.push(target)
      }
    }
    return result
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.y = t * 0.05
      ref.current.rotation.x = Math.sin(t * 0.1) * 0.1
    }
  })

  return (
    <group ref={ref} position={position}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos}>
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
        </mesh>
      ))}
      {nodes.map((node, i) =>
        node.connected.map((target, j) => {
          const start = new THREE.Vector3(...node.pos)
          const end = new THREE.Vector3(...nodes[target].pos)
          const geometry = new THREE.BufferGeometry().setFromPoints([start, end])
          return (
            <lineSegments key={`${i}-${j}`} geometry={geometry}>
              <lineBasicMaterial color="#3b82f6" transparent opacity={0.1} />
            </lineSegments>
          )
        })
      )}
    </group>
  )
}
