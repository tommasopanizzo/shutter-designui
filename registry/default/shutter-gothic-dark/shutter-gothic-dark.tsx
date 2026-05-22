"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** Gothic window shape. Color: Dark. */
export function ShutterGothicDark(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
      size="md"
      shape="gothic"
      defaultLevel={35}
      variant="dark"
      label="Gothic · Dark"
      {...props}
    />
  );
}
