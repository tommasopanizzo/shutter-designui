"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Extra-thick slats. Color: Classic. */
export function ShutterSlatChunkyClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="chunky"
      defaultLevel={60}
      variant="classic"
      label="Chunky slats · Classic"
      {...props}
    />
  );
}
