"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

const ShaderGradientCanvas = dynamic(
  () =>
    import("@shadergradient/react").then((mod) => mod.ShaderGradientCanvas),
  { ssr: false, loading: () => null },
);

const ShaderGradient = dynamic(
  () => import("@shadergradient/react").then((mod) => mod.ShaderGradient),
  { ssr: false, loading: () => null },
);

export function EnquiryCtaBackdrop() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(181,9,18,0.14),transparent_55%)]"
        aria-hidden
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40" aria-hidden>
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          brightness={0.85}
          cAzimuthAngle={180}
          cDistance={4.2}
          cPolarAngle={90}
          cameraZoom={1}
          color1="#191b1e"
          color2="#2a2d32"
          color3="#b50912"
          envPreset="city"
          grain="off"
          lightType="3d"
          positionX={0}
          positionY={0}
          positionZ={0}
          reflection={0.25}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          shader="defaults"
          type="plane"
          uAmplitude={1.2}
          uDensity={1.1}
          uFrequency={5.5}
          uSpeed={0.25}
          uStrength={1.5}
          uTime={0}
        />
      </ShaderGradientCanvas>
    </div>
  );
}