"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Casement window with cross mullions. Color: Industrial. */
export function ShutterCasement4Industrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="casement"
      defaultLevel={55}
      variant="industrial"
      label="4-pane casement · Industrial"
      {...props}
    />
  );
}
