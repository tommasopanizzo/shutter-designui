"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Gothic window shape. Color: Minimal. */
export function ShutterGothicMinimal(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="gothic"
      defaultLevel={35}
      variant="minimal"
      {...props}
    />
  );
}
