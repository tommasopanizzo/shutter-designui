"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Extra-thick slats. Color: Warm. */
export function ShutterSlatChunkyWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="chunky"
      defaultLevel={60}
      variant="warm"
      label="Chunky slats · Warm"
      {...props}
    />
  );
}
