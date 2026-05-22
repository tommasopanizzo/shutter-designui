"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thin slats. Color: Classic. */
export function ShutterSlatFineClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="fine"
      defaultLevel={60}
      variant="classic"
      label="Fine slats · Classic"
      {...props}
    />
  );
}
