"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Gothic window shape. Color: Industrial. */
export function ShutterGothicIndustrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="gothic"
      defaultLevel={35}
      variant="industrial"
      {...props}
    />
  );
}
