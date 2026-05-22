"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats with elliptical holes. Color: Dark. */
export function ShutterHolesOvalDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      holeShape="ellipse"
      defaultLevel={50}
      variant="dark"
      label="Oval holes · Dark"
      {...props}
    />
  );
}
