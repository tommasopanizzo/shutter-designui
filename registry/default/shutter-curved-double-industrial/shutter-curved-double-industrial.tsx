"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Two panels with curvature. Color: Industrial. */
export function ShutterCurvedDoubleIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      curved
      slatSize="thick"
      defaultLevel={60}
      variant="industrial"
      {...props}
    />
  );
}
