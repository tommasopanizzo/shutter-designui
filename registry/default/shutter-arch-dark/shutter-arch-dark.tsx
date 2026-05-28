"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Arched window shutter. Color: Dark. */
export function ShutterArchDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="arch"
      defaultLevel={55}
      variant="dark"
      {...props}
    />
  );
}
