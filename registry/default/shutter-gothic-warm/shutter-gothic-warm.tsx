"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Gothic window shape. Color: Warm. */
export function ShutterGothicWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="gothic"
      defaultLevel={35}
      variant="warm"
      label="Gothic · Warm"
      {...props}
    />
  );
}
