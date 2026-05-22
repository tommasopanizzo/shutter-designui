"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Extra-thick slats. Color: Dark. */
export function ShutterSlatChunkyDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="chunky"
      defaultLevel={60}
      variant="dark"
      label="Chunky slats · Dark"
      {...props}
    />
  );
}
