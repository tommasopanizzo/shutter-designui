"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Two casement panels with independent levels. Color: Minimal. */
export function ShutterDoubleCasementIndependentMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      shape="casement"
      panels={2}
      panelMode="independent"
      slatSize="thick"
      defaultLevels={[30, 80]}
      variant="minimal"
      {...props}
    />
  );
}
