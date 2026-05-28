"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats. Color: Warm. */
export function ShutterSlatThickWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      defaultLevel={60}
      variant="warm"
      {...props}
    />
  );
}
