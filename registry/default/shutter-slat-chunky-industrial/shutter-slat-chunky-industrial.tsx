"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Extra-thick slats. Color: Industrial. */
export function ShutterSlatChunkyIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="chunky"
      defaultLevel={60}
      variant="industrial"
      {...props}
    />
  );
}
