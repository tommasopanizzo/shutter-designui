"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Realistic rectangular slot perforations. Color: Warm. */
export function ShutterHolesRectWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      holeShape="rectangle"
      defaultLevel={50}
      variant="warm"
      {...props}
    />
  );
}
