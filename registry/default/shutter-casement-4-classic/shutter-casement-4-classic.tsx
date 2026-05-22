"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Casement window with cross mullions. Color: Classic. */
export function ShutterCasement4Classic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="casement"
      defaultLevel={55}
      variant="classic"
      label="4-pane casement · Classic"
      {...props}
    />
  );
}
