"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import type { ReactNode } from "react";
import { setLenisInstance } from "@/lib/scroll";

function LenisStore() {
  const lenis = useLenis();
  useEffect(() => {
    setLenisInstance(lenis ?? null);
    return () => setLenisInstance(null);
  }, [lenis]);
  return null;
}

export default function LenisProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        smoothWheel: true,
      }}
    >
      <LenisStore />
      {children}
    </ReactLenis>
  );
}