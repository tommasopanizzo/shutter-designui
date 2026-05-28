"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Medium slat thickness. Color: Warm. */
export function ShutterSlatMediumWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="medium"
      defaultLevel={60}
      variant="warm"
      {...props}
    />
  );
}
