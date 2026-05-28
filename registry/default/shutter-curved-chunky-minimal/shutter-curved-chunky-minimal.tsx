"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Large curved shutter with chunky slats. Color: Minimal. */
export function ShutterCurvedChunkyMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      slatSize="chunky"
      curved
      defaultLevel={75}
      variant="minimal"
      {...props}
    />
  );
}
