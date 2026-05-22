"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { Shutter, type ShutterProps } from "@/components/shutter";
import { presetInstallCommand } from "@/lib/registry-commands";
import { cn } from "@/lib/utils";

interface ShowcaseShutterProps extends ShutterProps {
  templateId: string;
}

export function ShowcaseShutter({ templateId, variant = "classic", ...props }: ShowcaseShutterProps) {
  const [copied, setCopied] = useState(false);
  const command = presetInstallCommand(templateId, variant);

  async function copy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="group flex flex-col items-center">
      <Shutter variant={variant} {...props} />
      <button
        type="button"
        onClick={copy}
        title={command}
        className={cn(
          "mt-2 flex max-w-[220px] items-center gap-1 rounded-md px-2 py-1 font-mono text-[10px] text-muted-foreground transition",
          "opacity-0 group-hover:opacity-100 focus-visible:opacity-100",
          "hover:bg-muted hover:text-foreground",
          copied && "opacity-100 text-foreground"
        )}
      >
        {copied ? <Check className="size-3 shrink-0" /> : <Copy className="size-3 shrink-0" />}
        <span className="truncate">{`@chumy/shutter-${templateId}-${variant}`}</span>
      </button>
    </div>
  );
}
