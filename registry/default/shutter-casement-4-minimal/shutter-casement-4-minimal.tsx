"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Casement window with cross mullions. Color: Minimal. */
export function ShutterCasement4Minimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="casement"
      defaultLevel={55}
      variant="minimal"
      {...props}
    />
  );
}
