"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** 3D curvature with thick slats. Color: Classic. */
export function ShutterCurvedThickClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      curved
      defaultLevel={55}
      variant="classic"
      label="Curved thick · Classic"
      {...props}
    />
  );
}
