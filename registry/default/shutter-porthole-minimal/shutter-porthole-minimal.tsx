"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Porthole window with rim. Color: Minimal. */
export function ShutterPortholeMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="porthole"
      defaultLevel={45}
      variant="minimal"
      label="Porthole · Minimal"
      {...props}
    />
  );
}
