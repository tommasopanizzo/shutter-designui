"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Independent panels with 1500ms stagger. Color: Industrial. */
export function ShutterStagger1500Industrial(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="lg"
      panels={2}
      panelMode="independent"
      stagger={1500}
      defaultLevels={[0, 0]}
      variant="industrial"
      label="Stagger 1.5s · Industrial"
      {...props}
    />
  );
}
