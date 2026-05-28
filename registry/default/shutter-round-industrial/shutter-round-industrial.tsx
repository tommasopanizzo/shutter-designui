"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Round window shutter. Color: Industrial. */
export function ShutterRoundIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="round"
      defaultLevel={80}
      variant="industrial"
      {...props}
    />
  );
}
