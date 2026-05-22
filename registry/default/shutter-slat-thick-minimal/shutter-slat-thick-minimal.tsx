"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats. Color: Minimal. */
export function ShutterSlatThickMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      defaultLevel={60}
      variant="minimal"
      label="Thick slats · Minimal"
      {...props}
    />
  );
}
