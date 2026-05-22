"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats. Color: Classic. */
export function ShutterSlatThickClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      defaultLevel={60}
      variant="classic"
      label="Thick slats · Classic"
      {...props}
    />
  );
}
