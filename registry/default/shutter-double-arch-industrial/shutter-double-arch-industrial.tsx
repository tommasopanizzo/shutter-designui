"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Synchronized double arched windows. Color: Industrial. */
export function ShutterDoubleArchIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      shape="arch"
      defaultLevel={50}
      variant="industrial"
      {...props}
    />
  );
}
