"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Two synchronized panels. Color: Warm. */
export function ShutterSyncDoubleWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      defaultLevel={60}
      variant="warm"
      label="Sync double · Warm"
      {...props}
    />
  );
}
