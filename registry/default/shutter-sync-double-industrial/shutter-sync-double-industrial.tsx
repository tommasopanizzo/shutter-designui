"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Two synchronized panels. Color: Industrial. */
export function ShutterSyncDoubleIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      defaultLevel={60}
      variant="industrial"
      {...props}
    />
  );
}
