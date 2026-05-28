"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Large curved shutter with chunky slats. Color: Dark. */
export function ShutterCurvedChunkyDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      slatSize="chunky"
      curved
      defaultLevel={75}
      variant="dark"
      {...props}
    />
  );
}
