"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Rectangular window shutter. Color: Dark. */
export function ShutterRectangleDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      defaultLevel={65}
      variant="dark"
      label="Rectangle · Dark"
      {...props}
    />
  );
}
