"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** 3D curvature with medium slats. Color: Dark. */
export function ShutterCurvedMediumDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="medium"
      curved
      defaultLevel={65}
      variant="dark"
      {...props}
    />
  );
}
