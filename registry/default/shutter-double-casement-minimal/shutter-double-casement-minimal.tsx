"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Side-by-side casement panels. Color: Minimal. */
export function ShutterDoubleCasementMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      shape="casement"
      panels={2}
      defaultLevel={50}
      variant="minimal"
      label="Double casement · Minimal"
      {...props}
    />
  );
}
