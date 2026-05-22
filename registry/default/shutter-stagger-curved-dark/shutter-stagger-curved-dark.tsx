"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** 800ms stagger with curvature and thick slats. Color: Dark. */
export function ShutterStaggerCurvedDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      panelMode="independent"
      stagger={800}
      curved
      slatSize="thick"
      defaultLevels={[85, 15]}
      variant="dark"
      label="Stagger curved · Dark"
      {...props}
    />
  );
}
