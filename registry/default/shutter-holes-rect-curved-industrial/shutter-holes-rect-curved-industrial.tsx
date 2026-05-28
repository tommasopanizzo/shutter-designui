"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Rectangular holes with 3D curvature. Color: Industrial. */
export function ShutterHolesRectCurvedIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      slatSize="chunky"
      holeShape="rectangle"
      curved
      defaultLevel={60}
      variant="industrial"
      {...props}
    />
  );
}
