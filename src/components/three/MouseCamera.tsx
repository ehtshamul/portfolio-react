import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

export function MouseCamera() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useFrame(() => {
    target.current.x += (mouse.current.x - target.current.x) * 0.05
    target.current.y += (mouse.current.y - target.current.y) * 0.05
    camera.position.x = target.current.x * 3
    camera.position.y = target.current.y * 2
    camera.lookAt(0, 0, -5)
  })

  useFrame((state) => {
    mouse.current.x = (state.pointer.x)
    mouse.current.y = (state.pointer.y)
  })

  return null
}
