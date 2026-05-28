"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Arched window shutter. Color: Classic. */
export function ShutterArchClassic(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="arch"
      defaultLevel={55}
      variant="classic"
      {...props}
    />
  );
}
