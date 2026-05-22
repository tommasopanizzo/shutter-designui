"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Round window shutter. Color: Warm. */
export function ShutterRoundWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="round"
      defaultLevel={80}
      variant="warm"
      label="Round · Warm"
      {...props}
    />
  );
}
