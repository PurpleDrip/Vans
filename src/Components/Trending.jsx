import React, { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Color } from "three";

function Model({ modelPath, scale, color }) {
  const modelRef = useRef();
  const [loadedModel, setLoadedModel] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      `${modelPath}?cacheBust=${new Date().getTime()}`,
      (gltf) => {
        const model = gltf.scene;
        setLoadedModel(model);
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            child.material.color = new Color(color);
          }
        });

        model.position.set(0, -0.5, 0);
        model.scale.set(scale, scale, scale);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    return () => {
      if (modelRef.current) {
        modelRef.current.traverse((child) => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
        setLoadedModel(null);
      }
    };
  }, [modelPath, scale]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      if (scale === 10) {
        modelRef.current.rotation.y -= delta * 0.2;
      } else {
        modelRef.current.rotation.y += delta * 0.2;
      }
    }
  });

  return loadedModel ? <primitive ref={modelRef} object={loadedModel} /> : null;
}

const Scene = ({ modelPath, scale, color }) => {
  return (
    <>
      <color attach="background" args={["#1f1f1f"]} />
      <fog attach="fog" args={["#1f1f1f", 5, 15]} />
      <ambientLight intensity={10} />
      <SpotLight
        position={[10, 10, 10]}
        angle={0.5}
        penumbra={0.5}
        intensity={30}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      <Model modelPath={modelPath} scale={scale} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
        minDistance={3}
        maxDistance={20}
      />
    </>
  );
};

const Trending = () => {
  const modelPaths = ["/models/model2.glb", "/models/model1.glb"];
  const scale = [10, 60];
  const lorems = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quos",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam, quos",
  ];
  const colors = ["#FF6347", "#4682B4", "#32CD32"];

  return (
    <div className="trend-container mt-20 mx-16 mb-16">
      <h2 className="text-[--secondary] text-8xl text-center tracking-[3rem] mb-16">
        Best Sellers
      </h2>
      <div className="min-h-screen bg-[--primary]">
        <div className="box-wrapper flex flex-col gap-28">
          {lorems.map((title, index) => (
            <div
              key={index}
              className={`box-container flex items-center justify-between ${
                index === 1
                  ? "flex-row mx-4 gap-8"
                  : "flex-row-reverse mx-4 gap-8"
              }`}
            >
              <p className="text-[--secondary] text-2xl">{title}</p>
              <div className="box">
                <Suspense
                  fallback={
                    <div className="text-[--secondary]">Loading...</div>
                  }
                >
                  <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [0, -1, 0], fov: 45 }}
                    gl={{
                      preserveDrawingBuffer: true,
                      antialias: true,
                      alpha: true,
                    }}
                  >
                    <Scene
                      modelPath={modelPaths[index]}
                      scale={scale[index]}
                      color={colors[index]}
                    />
                  </Canvas>
                </Suspense>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
