"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Two panels with curvature. Color: Minimal. */
export function ShutterCurvedDoubleMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      curved
      slatSize="thick"
      defaultLevel={60}
      variant="minimal"
      {...props}
    />
  );
}
