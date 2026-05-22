"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Arched window shutter. Color: Minimal. */
export function ShutterArchMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="arch"
      defaultLevel={55}
      variant="minimal"
      label="Arch · Minimal"
      {...props}
    />
  );
}
