"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thin slats. Color: Industrial. */
export function ShutterSlatFineIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="fine"
      defaultLevel={60}
      variant="industrial"
      label="Fine slats · Industrial"
      {...props}
    />
  );
}
