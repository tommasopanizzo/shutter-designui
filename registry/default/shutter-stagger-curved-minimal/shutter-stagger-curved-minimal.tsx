"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** 800ms stagger with curvature and thick slats. Color: Minimal. */
export function ShutterStaggerCurvedMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      panelMode="independent"
      stagger={800}
      curved
      slatSize="thick"
      defaultLevels={[85, 15]}
      variant="minimal"
      label="Stagger curved · Minimal"
      {...props}
    />
  );
}
