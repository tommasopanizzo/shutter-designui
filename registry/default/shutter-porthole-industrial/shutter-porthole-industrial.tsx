"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Porthole window with rim. Color: Industrial. */
export function ShutterPortholeIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="porthole"
      defaultLevel={45}
      variant="industrial"
      label="Porthole · Industrial"
      {...props}
    />
  );
}
