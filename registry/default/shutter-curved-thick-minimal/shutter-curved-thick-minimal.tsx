"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** 3D curvature with thick slats. Color: Minimal. */
export function ShutterCurvedThickMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      curved
      defaultLevel={55}
      variant="minimal"
      label="Curved thick · Minimal"
      {...props}
    />
  );
}
