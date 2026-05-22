"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Two panels with curvature. Color: Warm. */
export function ShutterCurvedDoubleWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      curved
      slatSize="thick"
      defaultLevel={60}
      variant="warm"
      label="Curved double · Warm"
      {...props}
    />
  );
}
