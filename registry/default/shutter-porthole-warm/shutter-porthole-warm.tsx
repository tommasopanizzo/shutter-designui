"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Porthole window with rim. Color: Warm. */
export function ShutterPortholeWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="porthole"
      defaultLevel={45}
      variant="warm"
      {...props}
    />
  );
}
