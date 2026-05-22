"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Realistic rectangular slot perforations. Color: Minimal. */
export function ShutterHolesRectMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="thick"
      holeShape="rectangle"
      defaultLevel={50}
      variant="minimal"
      label="Rectangular holes · Minimal"
      {...props}
    />
  );
}
