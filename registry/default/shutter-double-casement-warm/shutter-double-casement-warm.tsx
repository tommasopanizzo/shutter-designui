"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Side-by-side casement panels. Color: Warm. */
export function ShutterDoubleCasementWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      shape="casement"
      panels={2}
      defaultLevel={50}
      variant="warm"
      label="Double casement · Warm"
      {...props}
    />
  );
}
