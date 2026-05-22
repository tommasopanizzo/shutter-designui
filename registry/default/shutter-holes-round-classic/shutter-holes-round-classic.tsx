"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats with circular perforations. Color: Classic. */
export function ShutterHolesRoundClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      holeShape="circle"
      defaultLevel={50}
      variant="classic"
      label="Round holes · Classic"
      {...props}
    />
  );
}
