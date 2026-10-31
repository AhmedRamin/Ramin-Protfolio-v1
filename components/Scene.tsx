"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const ACID = "#c9f74a";

function Starfield({ count = 900, radius = 12 }: { count?: number; radius?: number }) {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * (0.35 + Math.random() * 0.65);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [count, radius]);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.028}
        color="#ffffff"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function Rings() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.z += delta * 0.06;
    group.current.rotation.x += delta * 0.02;
  });

  const rings = [
    { r: 2.65, tilt: 1.32, opacity: 0.28 },
    { r: 3.0, tilt: 1.12, opacity: 0.16 },
    { r: 3.4, tilt: 1.48, opacity: 0.1 },
  ];

  return (
    <group ref={group} rotation={[0.4, 0, 0]}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[ring.tilt, i * 0.5, 0]}>
          <torusGeometry args={[ring.r, 0.004, 8, 220]} />
          <meshBasicMaterial color={ACID} transparent opacity={ring.opacity} />
        </mesh>
      ))}
    </group>
  );
}

function OrbitingShards() {
  const group = useRef<THREE.Group>(null);
  const shards = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        angle: (i / 7) * Math.PI * 2,
        radius: 2.9 + Math.random() * 0.9,
        y: (Math.random() - 0.5) * 2.2,
        size: 0.055 + Math.random() * 0.07,
        speed: 0.1 + Math.random() * 0.12,
      })),
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const s = shards[i];
      child.position.x = Math.cos(s.angle + t * s.speed) * s.radius;
      child.position.z = Math.sin(s.angle + t * s.speed) * s.radius;
      child.position.y = s.y + Math.sin(t * 0.7 + i) * 0.16;
      child.rotation.x += 0.01;
      child.rotation.y += 0.013;
    });
  });

  return (
    <group ref={group}>
      {shards.map((s, i) => (
        <mesh key={i} scale={s.size}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color={i % 3 === 0 ? ACID : "#8b9199"} transparent opacity={0.75} />
        </mesh>
      ))}
    </group>
  );
}

function Core({ variant }: { variant: "hero" | "panel" }) {
  const group = useRef<THREE.Group>(null);
  const wire = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const isWide = viewport.aspect > 1.05;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    // gentle idle drift
    g.rotation.y += delta * (variant === "panel" ? 0.24 : 0.13);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, Math.sin(state.clock.elapsedTime * 0.25) * 0.14, 0.05);

    // pointer parallax
    const px = state.pointer.x;
    const py = state.pointer.y;
    const targetX = (variant === "hero" && isWide ? 2.25 : 0) + px * 0.35;
    g.position.x = THREE.MathUtils.lerp(g.position.x, targetX, 0.05);
    g.position.y = THREE.MathUtils.lerp(g.position.y, py * 0.25, 0.05);

    if (wire.current) {
      wire.current.rotation.y -= delta * 0.2;
      wire.current.rotation.z += delta * 0.05;
    }
  });

  const scale = variant === "panel" ? 0.72 : isWide ? 0.86 : 0.72;

  return (
    <group ref={group} scale={scale}>
      {/* outer wire mesh */}
      <mesh ref={wire}>
        <icosahedronGeometry args={[2.05, 1]} />
        <meshBasicMaterial color={ACID} wireframe transparent opacity={0.26} />
      </mesh>

      {/* dark metallic core */}
      <mesh>
        <icosahedronGeometry args={[1.62, 12]} />
        <meshStandardMaterial
          color="#0b1007"
          roughness={0.32}
          metalness={0.92}
          emissive="#2c3a10"
          emissiveIntensity={0.55}
        />
      </mesh>

      {/* inner glow shell */}
      <mesh scale={1.03}>
        <icosahedronGeometry args={[1.62, 6]} />
        <meshBasicMaterial color={ACID} transparent opacity={0.05} side={THREE.BackSide} />
      </mesh>

      <Rings />
      <OrbitingShards />
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#ffffff" />
      <pointLight position={[-5, -2, 3]} intensity={28} color={ACID} distance={14} />
      <pointLight position={[3, 4, -6]} intensity={18} color="#7fd7ff" distance={16} />
    </>
  );
}

function Descent() {
  const { camera, size } = useThree();
  useFrame(() => {
    const mobile = size.width < 780;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, mobile ? 9.5 : 7.6, 0.03);
  });
  return null;
}

export default function Scene({ variant = "hero" }: { variant?: "hero" | "panel" }) {
  return (
    <Canvas
      className="scene-canvas"
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7.6], fov: 42 }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Lights />
        <Core variant={variant} />
        <Starfield count={variant === "panel" ? 350 : 900} radius={variant === "panel" ? 8 : 12} />
        <Descent />
      </Suspense>
    </Canvas>
  );
}
