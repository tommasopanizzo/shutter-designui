"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** 3D curvature with thick slats. Color: Warm. */
export function ShutterCurvedThickWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      curved
      defaultLevel={55}
      variant="warm"
      label="Curved thick · Warm"
      {...props}
    />
  );
}
