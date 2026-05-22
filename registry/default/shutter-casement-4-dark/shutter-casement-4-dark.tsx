"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Casement window with cross mullions. Color: Dark. */
export function ShutterCasement4Dark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="casement"
      defaultLevel={55}
      variant="dark"
      label="4-pane casement · Dark"
      {...props}
    />
  );
}
