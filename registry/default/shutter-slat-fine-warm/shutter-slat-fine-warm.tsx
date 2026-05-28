"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thin slats. Color: Warm. */
export function ShutterSlatFineWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="fine"
      defaultLevel={60}
      variant="warm"
      {...props}
    />
  );
}
