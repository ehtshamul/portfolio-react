import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function FloatingShapes() {
  return (
    <>
      <FloatingIcosahedron />
      <FloatingOctahedron />
      <FloatingTorus />
      <FloatingDodecahedron />
      <FloatingSpheres />
      <GlowingRings />
    </>
  )
}

function FloatingIcosahedron() {
  const ref = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * 0.3
      ref.current.rotation.y = t * 0.5
      ref.current.position.y = Math.sin(t * 0.8) * 1.5
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.3
      wireRef.current.rotation.y = -t * 0.5
      wireRef.current.position.y = Math.sin(t * 0.8) * 1.5
    }
  })

  return (
    <group position={[8, 0, -5]}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[4, 1]} />
        <meshPhysicalMaterial
          color="#3b82f6"
          metalness={0.1}
          roughness={0.1}
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={wireRef} scale={[1.05, 1.05, 1.05]}>
        <icosahedronGeometry args={[4, 1]} />
        <meshBasicMaterial color="#3b82f6" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

function FloatingOctahedron() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * 0.4
      ref.current.rotation.y = t * 0.6
      ref.current.position.y = Math.sin(t * 1.2) * 2
    }
  })

  return (
    <mesh ref={ref} position={[-10, 5, -3]}>
      <octahedronGeometry args={[2.5, 0]} />
      <meshPhysicalMaterial
        color="#8b5cf6"
        metalness={0.1}
        roughness={0.1}
        transparent
        opacity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * 0.5 + Math.PI * 0.3
      ref.current.rotation.y = t * 0.3
      ref.current.rotation.z = t * 0.4
      ref.current.position.y = Math.sin(t * 0.6) * 1.8
    }
  })

  return (
    <mesh ref={ref} position={[-6, -6, -4]}>
      <torusGeometry args={[3, 0.5, 16, 100]} />
      <meshPhysicalMaterial
        color="#06b6d4"
        metalness={0.1}
        roughness={0.1}
        transparent
        opacity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function FloatingDodecahedron() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.x = t * 0.6
      ref.current.rotation.y = t * 0.4
      ref.current.position.y = Math.sin(t) * 1.2
    }
  })

  return (
    <mesh ref={ref} position={[12, -5, -6]}>
      <dodecahedronGeometry args={[2, 0]} />
      <meshPhysicalMaterial
        color="#3b82f6"
        metalness={0.1}
        roughness={0.1}
        transparent
        opacity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function FloatingSpheres() {
  const positions = useMemo(() => [
    [15, 8, -10], [-15, -8, -8], [5, 12, -12], [-8, -12, -7],
    [18, -3, -9], [-18, 3, -11], [0, 8, -15], [10, -10, -8],
    [-12, 8, -10], [8, 15, -13],
  ] as [number, number, number][], [])

  const colors = ['#3b82f6', '#8b5cf6', '#06b6d4']

  return (
    <>
      {positions.map((pos, i) => (
        <FloatingSphere key={i} position={pos} color={colors[i % 3]} index={i} />
      ))}
    </>
  )
}

function FloatingSphere({ position, color, index }: { position: [number, number, number]; color: string; index: number }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t * (0.5 + index * 0.15) + index) * 1.5
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.4 + (index % 3) * 0.1} />
    </mesh>
  )
}

function GlowingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1Ref.current) ring1Ref.current.rotation.z = t * 0.2
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.1
      ring2Ref.current.rotation.x = t * 0.1
    }
  })

  return (
    <group position={[8, 0, -8]}>
      <mesh ref={ring1Ref} rotation={[Math.PI * 0.5, 0, 0]}>
        <ringGeometry args={[6, 6.1, 64]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI * 0.3, Math.PI * 0.2, 0]}>
        <ringGeometry args={[8, 8.1, 64]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.08} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}
