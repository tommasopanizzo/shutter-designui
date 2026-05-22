"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Synchronized double arched windows. Color: Minimal. */
export function ShutterDoubleArchMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      shape="arch"
      defaultLevel={50}
      variant="minimal"
      label="Double arch · Minimal"
      {...props}
    />
  );
}
