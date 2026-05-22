"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Arched window shutter. Color: Warm. */
export function ShutterArchWarm(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="arch"
      defaultLevel={55}
      variant="warm"
      label="Arch · Warm"
      {...props}
    />
  );
}
