import { useMemo, useRef } from "react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function BufferPoints({ count = 1000 }) {
  const pointsRef = useRef(null);
  useFrame(() => ((pointsRef.current as any).rotation.x -= 0.001));
  const points = useMemo(() => {
    const p = new Array(count).fill(0).map((_: unknown) => (0.5 - Math.random()) * 20);
    return new THREE.BufferAttribute(new Float32Array(p), 3);
  }, [count]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...points} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="rgb(255, 170, 105)" sizeAttenuation={true} />
    </points>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <BufferPoints />
    </Canvas>
  );
}
