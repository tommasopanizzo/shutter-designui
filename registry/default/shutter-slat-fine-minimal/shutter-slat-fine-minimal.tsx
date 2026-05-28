"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thin slats. Color: Minimal. */
export function ShutterSlatFineMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="fine"
      defaultLevel={60}
      variant="minimal"
      {...props}
    />
  );
}
