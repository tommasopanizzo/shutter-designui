"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Gothic window shape. Color: Classic. */
export function ShutterGothicClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="gothic"
      defaultLevel={35}
      variant="classic"
      label="Gothic · Classic"
      {...props}
    />
  );
}
