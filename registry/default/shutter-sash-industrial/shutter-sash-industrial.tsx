"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Sash window with horizontal division. Color: Industrial. */
export function ShutterSashIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="sash"
      defaultLevel={60}
      variant="industrial"
      {...props}
    />
  );
}
