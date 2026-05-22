"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Synchronized double arched windows. Color: Classic. */
export function ShutterDoubleArchClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      shape="arch"
      defaultLevel={50}
      variant="classic"
      label="Double arch · Classic"
      {...props}
    />
  );
}
