"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats with circular perforations. Color: Minimal. */
export function ShutterHolesRoundMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      holeShape="circle"
      defaultLevel={50}
      variant="minimal"
      {...props}
    />
  );
}
