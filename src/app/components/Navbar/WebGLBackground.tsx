"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const GoldenWave = () => {
  const mesh = useRef<THREE.Mesh>(null!);
  const mouse = useRef({ x: 0, y: 0 });

  // Custom Shader Material for a subtle, flowing dark gold wave
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime * 0.5;
    // Lerp mouse for smoothness
    mouse.current.x = state.mouse.x;
    mouse.current.y = state.mouse.y;
    uniforms.uMouse.value.lerp(new THREE.Vector2(state.mouse.x, state.mouse.y), 0.05);
  });

  // Simple Vertex Shader for wave distortion
  const vertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      float wave = sin(pos.x * 1.5 + uTime * 0.5) * 0.2 + cos(pos.y * 1.5 + uTime * 0.3) * 0.2;
      pos.z += wave * (0.5 + uMouse.y * 0.5); 
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

  // Fragment Shader: Deep black with subtle champagne gold lines
  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vec3 gold = vec3(0.941, 0.792, 0.396); // #F0CB66
      vec3 black = vec3(0.035, 0.035, 0.031); // #090908
      
      float pattern = sin(vUv.y * 30.0 + uTime * 2.0) * 0.5 + 0.5;
      float gradient = smoothstep(0.0, 0.3, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
      
      vec3 color = mix(black, gold, pattern * 0.05); // Very subtle
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[30, 30, 64, 64]} />
      <shaderMaterial 
        vertexShader={vertexShader} 
        fragmentShader={fragmentShader} 
        uniforms={uniforms} 
        wireframe={false} 
      />
    </mesh>
  );
};

export default function WebGLBackground() {
  return (
    <Canvas 
      className="!fixed inset-0 z-0 pointer-events-none" 
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
    >
      <GoldenWave />
    </Canvas>
  );
}