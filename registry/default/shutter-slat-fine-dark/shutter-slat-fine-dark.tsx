"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Thin slats. Color: Dark. */
export function ShutterSlatFineDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      slatSize="fine"
      defaultLevel={60}
      variant="dark"
      label="Fine slats · Dark"
      {...props}
    />
  );
}
