"use client";

import { ShowcaseShutter } from "@/components/showcase-shutter";
import {
  type ShutterHoleShape,
  type ShutterPanelMode,
  type ShutterPanels,
  type ShutterShape,
  type ShutterSize,
  type ShutterSlatSize,
  type ShutterVariant,
} from "@/components/shutter";
import presetsConfig from "@/registry/presets.config.json";

const VARIANTS = presetsConfig.variants as ShutterVariant[];

const VARIANT_LABELS: Record<ShutterVariant, string> = {
  classic: "Classic",
  warm: "Warm",
  dark: "Dark",
  minimal: "Minimal",
  industrial: "Industrial",
};

interface TemplateProps {
  size?: ShutterSize;
  shape?: ShutterShape;
  panels?: ShutterPanels;
  panelMode?: ShutterPanelMode;
  stagger?: number;
  slatSize?: ShutterSlatSize;
  curved?: boolean;
  holeShape?: ShutterHoleShape;
  defaultLevel?: number;
  defaultLevels?: number[];
}

const SECTIONS = presetsConfig.templates.map((template) => ({
  id: template.id,
  title: template.label,
  items: VARIANTS.map((variant) => ({
    ...(template.props as TemplateProps),
    variant,
    label: `${template.label} · ${VARIANT_LABELS[variant]}`,
  })),
}));

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(to_bottom,#fbfbfb,#f5f5f5)] px-6 py-12 text-foreground dark:bg-[linear-gradient(to_bottom,#171717,#121212)]">
      <section className="mx-auto w-full max-w-[1400px] space-y-14">
        <header className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">Shutter component</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            26 configurations × 5 color variants. Hover a preview to copy its install command.
          </p>
        </header>

        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {section.title}
            </h2>
            <div className="flex flex-wrap items-end justify-center gap-x-6 gap-y-10">
              {section.items.map((item) => (
                <ShowcaseShutter
                  key={`${section.id}-${item.variant}`}
                  templateId={section.id}
                  variant={item.variant}
                  size={item.size}
                  panels={item.panels}
                  shape={item.shape}
                  panelMode={item.panelMode}
                  stagger={item.stagger}
                  slatSize={item.slatSize}
                  curved={item.curved}
                  holeShape={item.holeShape}
                  label={item.label}
                  defaultLevel={item.defaultLevel}
                  defaultLevels={item.defaultLevels}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
