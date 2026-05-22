"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Round window shutter. Color: Dark. */
export function ShutterRoundDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="round"
      defaultLevel={80}
      variant="dark"
      label="Round · Dark"
      {...props}
    />
  );
}
