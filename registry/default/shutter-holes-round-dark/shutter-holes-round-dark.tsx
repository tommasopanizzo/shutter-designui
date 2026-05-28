"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats with circular perforations. Color: Dark. */
export function ShutterHolesRoundDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      holeShape="circle"
      defaultLevel={50}
      variant="dark"
      {...props}
    />
  );
}
