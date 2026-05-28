"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Two synchronized panels. Color: Classic. */
export function ShutterSyncDoubleClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      defaultLevel={60}
      variant="classic"
      {...props}
    />
  );
}
