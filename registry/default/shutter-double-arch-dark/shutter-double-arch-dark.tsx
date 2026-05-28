"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Synchronized double arched windows. Color: Dark. */
export function ShutterDoubleArchDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      shape="arch"
      defaultLevel={50}
      variant="dark"
      {...props}
    />
  );
}
