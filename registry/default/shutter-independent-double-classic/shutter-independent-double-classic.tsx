"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Two panels with independent motors. Color: Classic. */
export function ShutterIndependentDoubleClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      panelMode="independent"
      defaultLevels={[30, 90]}
      variant="classic"
      {...props}
    />
  );
}
