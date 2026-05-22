"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Rectangular window shutter. Color: Minimal. */
export function ShutterRectangleMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      defaultLevel={65}
      variant="minimal"
      label="Rectangle · Minimal"
      {...props}
    />
  );
}
