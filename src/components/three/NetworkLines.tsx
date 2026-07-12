import { useMemo, useRef } from 'react'
import * as THREE from 'three'

export function NetworkLines() {
  const ref = useRef<THREE.Group>(null)

  const lines = useMemo(() => {
    const result: { start: [number, number, number]; end: [number, number, number] }[] = []
    for (let i = 0; i < 20; i++) {
      result.push({
        start: [
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 20 - 10,
        ],
        end: [
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 20 - 10,
        ],
      })
    }
    return result
  }, [])

  const geometries = useMemo(() => {
    return lines.map(line => {
      const points = [new THREE.Vector3(...line.start), new THREE.Vector3(...line.end)]
      return new THREE.BufferGeometry().setFromPoints(points)
    })
  }, [lines])

  return (
    <group ref={ref}>
      {geometries.map((geo, i) => (
        <lineSegments key={i} geometry={geo}>
          <lineBasicMaterial color="#3b82f6" transparent opacity={0.08} />
        </lineSegments>
      ))}
    </group>
  )
}
