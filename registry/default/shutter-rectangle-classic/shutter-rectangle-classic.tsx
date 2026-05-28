"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Rectangular window shutter. Color: Classic. */
export function ShutterRectangleClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      defaultLevel={65}
      variant="classic"
      {...props}
    />
  );
}
