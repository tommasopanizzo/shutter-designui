"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Rectangular window shutter. Color: Warm. */
export function ShutterRectangleWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      defaultLevel={65}
      variant="warm"
      label="Rectangle · Warm"
      {...props}
    />
  );
}
