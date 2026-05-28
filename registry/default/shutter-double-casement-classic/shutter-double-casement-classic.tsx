"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Side-by-side casement panels. Color: Classic. */
export function ShutterDoubleCasementClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      shape="casement"
      panels={2}
      defaultLevel={50}
      variant="classic"
      {...props}
    />
  );
}
