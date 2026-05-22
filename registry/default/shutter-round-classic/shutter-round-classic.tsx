"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Round window shutter. Color: Classic. */
export function ShutterRoundClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="round"
      defaultLevel={80}
      variant="classic"
      label="Round · Classic"
      {...props}
    />
  );
}
