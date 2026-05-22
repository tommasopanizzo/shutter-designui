"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Side-by-side casement panels. Color: Dark. */
export function ShutterDoubleCasementDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      shape="casement"
      panels={2}
      defaultLevel={50}
      variant="dark"
      label="Double casement · Dark"
      {...props}
    />
  );
}
