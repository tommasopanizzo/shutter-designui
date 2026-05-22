"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Two panels with curvature. Color: Classic. */
export function ShutterCurvedDoubleClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      curved
      slatSize="thick"
      defaultLevel={60}
      variant="classic"
      label="Curved double · Classic"
      {...props}
    />
  );
}
