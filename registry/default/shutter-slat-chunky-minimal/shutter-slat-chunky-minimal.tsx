"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Extra-thick slats. Color: Minimal. */
export function ShutterSlatChunkyMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="chunky"
      defaultLevel={60}
      variant="minimal"
      label="Chunky slats · Minimal"
      {...props}
    />
  );
}
