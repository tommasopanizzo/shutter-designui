"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats with elliptical holes. Color: Classic. */
export function ShutterHolesOvalClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      holeShape="ellipse"
      defaultLevel={50}
      variant="classic"
      label="Oval holes · Classic"
      {...props}
    />
  );
}
