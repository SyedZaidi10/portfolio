import { Shader, Aurora } from 'shaders/react'
import './AuroraBackground.css'

/**
 * Animated WebGPU aurora used as the hero backdrop.
 *
 * Tune the look here — the props map 1:1 to the Aurora component docs
 * (https://shaders.com/docs/components/aurora).
 *
 * Only mounted when the browser exposes WebGPU (see Hero.jsx). The library
 * degrades to a transparent canvas where WebGPU is missing, but skipping the
 * mount avoids spinning up a GPU device for nothing.
 */
export default function AuroraBackground() {
  return (
    <Shader className="aurora-canvas">
      <Aurora
        colorA="#7c3aed"
        colorB="#a5b4fc"
        colorC="#22d3ee"
        colorSpace="oklch"
        intensity={70}
        speed={3}
        curtainCount={5}
        waviness={55}
        rayDensity={22}
        height={140}
        center={{ x: 0.5, y: 0 }}
      />
    </Shader>
  )
}
