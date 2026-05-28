"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Medium slat thickness. Color: Minimal. */
export function ShutterSlatMediumMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="medium"
      defaultLevel={60}
      variant="minimal"
      {...props}
    />
  );
}
