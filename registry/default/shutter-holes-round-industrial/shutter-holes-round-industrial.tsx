"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats with circular perforations. Color: Industrial. */
export function ShutterHolesRoundIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      holeShape="circle"
      defaultLevel={50}
      variant="industrial"
      label="Round holes · Industrial"
      {...props}
    />
  );
}
