"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thick slats. Color: Dark. */
export function ShutterSlatThickDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      defaultLevel={60}
      variant="dark"
      label="Thick slats · Dark"
      {...props}
    />
  );
}
