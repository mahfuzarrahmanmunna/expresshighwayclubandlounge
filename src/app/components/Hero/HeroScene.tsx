"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const Monolith = ({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) => {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.PointLight>(null);
  const { mouse } = useThree();

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.8, 1);
    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const angle = y * 0.8;

      pos.setY(i, y * 2.6);
      pos.setX(i, x * Math.cos(angle) - z * Math.sin(angle));
      pos.setZ(i, x * Math.sin(angle) + z * Math.cos(angle));
    }

    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const sp = scrollProgress.current;

    if (group.current) {
      group.current.rotation.x = t * 0.22 + mouse.y * 0.34;
      group.current.rotation.y = t * 0.5 + mouse.x * 0.42;
      group.current.rotation.z = Math.sin(t * 0.75) * 0.3;
      group.current.position.x = Math.sin(t * 0.9) * 0.45;
      group.current.position.y = Math.cos(t * 1.1) * 0.35;

      if (sp > 0.42 && sp <= 0.7) {
        const progress = (sp - 0.42) / 0.28;
        group.current.position.z = progress * 4.8;
        group.current.position.y -= progress * 1.7;
        group.current.scale.setScalar(1 - progress * 0.42);
      } else if (sp > 0.7) {
        group.current.position.z = 4.8;
        group.current.position.y -= 1.7;
      }
    }

    if (ring.current) {
      ring.current.rotation.x = t * 0.5 + Math.PI / 2;
      ring.current.rotation.y = t * 0.35;
      ring.current.rotation.z = t * 0.8;
      ring.current.position.z = Math.sin(t * 1.1) * 0.3;
    }

    if (glow.current) {
      glow.current.position.x = Math.sin(t * 0.8) * 3.7;
      glow.current.position.z = Math.cos(t * 0.8) * 3.4;
    }
  });

  return (
    <group ref={group}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshPhysicalMaterial
          color="#171412"
          metalness={0.98}
          roughness={0.13}
          clearcoat={1}
          clearcoatRoughness={0.12}
          envMapIntensity={1.8}
          reflectivity={1}
        />
      </mesh>

      <mesh ref={ring} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.05, 0.05, 24, 240]} />
        <meshBasicMaterial color="#d9b768" transparent opacity={0.8} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.2]}>
        <torusGeometry args={[3.35, 0.025, 18, 220]} />
        <meshBasicMaterial color="#f4e3b1" transparent opacity={0.35} />
      </mesh>

      <pointLight ref={glow} position={[3.5, 2, 5]} intensity={20} distance={16} color="#f0cb66" />
    </group>
  );
};

export default function HeroScene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  return (
    <Canvas className="!absolute inset-0 z-10" camera={{ position: [0, 0, 7.2], fov: 38 }} dpr={[1, 2]}>
      <color attach="background" args={['#090908']} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 8, 4]} intensity={2.2} color="#f5f1e8" />
      <pointLight position={[-4, 1, 4]} intensity={4} color="#d4a65d" />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.1}>
        <Monolith scrollProgress={scrollProgress} />
      </Float>

      <Sparkles count={110} scale={[10, 9, 9]} size={3} speed={0.8} color="#f6d98d" opacity={0.75} />
      <Environment preset="night" />
    </Canvas>
  );
} 