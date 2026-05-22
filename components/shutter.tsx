"use client";

import { ChevronDown, ChevronUp, Square } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

export type ShutterVariant = "classic" | "warm" | "dark" | "minimal" | "industrial";
export type ShutterSize = "sm" | "md" | "lg" | "xl";
export type ShutterPanels = 1 | 2;
export type ShutterShape =
  | "rectangle"
  | "arch"
  | "round"
  | "gothic"
  | "porthole"
  | "casement"
  | "sash";
export type ShutterPanelMode = "sync" | "independent";
export type ShutterSlatSize = "fine" | "medium" | "thick" | "chunky";
export type ShutterHoleShape = "circle" | "ellipse" | "rectangle";

export interface ShutterProps {
  /** Single-value controlled level (0 = open, 100 = fully closed). */
  level?: number;
  /** Initial level when uncontrolled & single-panel / sync. */
  defaultLevel?: number;
  /** Called whenever the shared / first panel level changes. */
  onLevelChange?: (level: number) => void;
  /** Per-panel controlled levels (independent mode). */
  levels?: number[];
  /** Initial per-panel levels (independent mode). */
  defaultLevels?: number[];
  /** Called whenever any panel level changes (full array). */
  onLevelsChange?: (levels: number[]) => void;
  /** Visual style. */
  variant?: ShutterVariant;
  /** Visual size. */
  size?: ShutterSize;
  /** Window shape. Square / round / arched / gothic / porthole-with-rim. */
  shape?: ShutterShape;
  /** Number of panels rendered side-by-side in a single frame. */
  panels?: ShutterPanels;
  /**
   * How double panels behave:
   * - "sync": both panels always share the same level (default).
   * - "independent": each panel has its own level, dragged separately.
   */
  panelMode?: ShutterPanelMode;
  /** Delay (ms) between panels' motor starts when buttons trigger animation. */
  stagger?: number;
  /** Thickness of the individual slats. */
  slatSize?: ShutterSlatSize;
  /** Adds a cylindrical shading overlay so the shutter looks 3D. */
  curved?: boolean;
  /** Perforation shape. Default "ellipse" (typical modern shutter slot).
   *  "rectangle" uses SVG for realistic square slots. "circle" is the classic round hole. */
  holeShape?: ShutterHoleShape;
  /**
   * Motor speed expressed as ms per percent. With 60ms/% a full
   * open→closed travel takes 6 seconds (linear, like a real motor).
   */
  motorSpeedMs?: number;
  /** Initial speed when uncontrolled. */
  defaultMotorSpeedMs?: number;
  /** Called whenever the motor speed changes. */
  onMotorSpeedChange?: (value: number) => void;
  /** Travel speed for 0-50% (ms/%). */
  travelMotorSpeedMs?: number;
  /** Seal speed for 50-100% (ms/%). */
  sealMotorSpeedMs?: number;
  /** Initial travel speed when uncontrolled (ms/%). */
  defaultTravelMotorSpeedMs?: number;
  /** Initial seal speed when uncontrolled (ms/%). */
  defaultSealMotorSpeedMs?: number;
  /** Called whenever travel speed changes. */
  onTravelMotorSpeedChange?: (value: number) => void;
  /** Called whenever seal speed changes. */
  onSealMotorSpeedChange?: (value: number) => void;
  /** Show the speed slider below the controls. */
  showSpeedControl?: boolean;
  /** Optional readable name shown below the controls. */
  label?: string;
  /** Hide the level readout (for compact layouts). */
  hideReadout?: boolean;
  /**
   * Background visible behind the shutter when open (window recess).
   * @default "#ffffff"
   */
  paneBackground?: string;
  /**
   * Optional CSS `background-image` layered on the pane (e.g. a sky gradient).
   * Omit for a flat `paneBackground` only.
   */
  paneOverlay?: string;
  /** Wrapper class name. */
  className?: string;
}

export const DEFAULT_PANE_BACKGROUND = "#ffffff";

interface VariantStyle {
  frame: string;
  inner: string;
  slatPrimary: string; // top of each slat
  slatSecondary: string; // shadow groove between slats
  glow: string;
  dark: string;
  mullion: string;
  /** Level (0-100) at which the shutter has fully covered the window. */
  breakpoint: number;
}

const VARIANTS: Record<ShutterVariant, VariantStyle> = {
  classic: {
    frame:
      "border border-zinc-400/70 bg-[linear-gradient(to_bottom,#ececec,#d4d4d8)] shadow-[0_1px_0_rgba(255,255,255,0.5)_inset]",
    inner: "border-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]",
    slatPrimary: "#9a9aa1",
    slatSecondary: "#7f7f87",
    glow: "rgba(255,245,210,0.65)",
    dark: "#000000",
    mullion: "#d6dbe3",
    breakpoint: 70,
  },
  warm: {
    frame:
      "border border-[#1a0f06] bg-[linear-gradient(to_bottom,#4a3020,#2e1a0c)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
    inner: "border-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]",
    slatPrimary: "#8b5a3c",
    slatSecondary: "#663b22",
    glow: "rgba(255,220,160,0.7)",
    dark: "#1a0a02",
    mullion: "#d5b58c",
    breakpoint: 65,
  },
  dark: {
    frame:
      "border border-zinc-950 bg-[linear-gradient(to_bottom,#2a2a30,#141418)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
    inner: "border-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]",
    slatPrimary: "#3f3f46",
    slatSecondary: "#1f1f23",
    glow: "rgba(160,200,255,0.55)",
    dark: "#02030a",
    mullion: "#9ca6bd",
    breakpoint: 70,
  },
  minimal: {
    frame: "border border-zinc-300/90 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]",
    inner: "border-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]",
    slatPrimary: "#e4e4e7",
    slatSecondary: "#c4c4c8",
    glow: "transparent",
    dark: "#0a0a0a",
    mullion: "#cfd5df",
    breakpoint: 80,
  },
  industrial: {
    frame:
      "border border-zinc-800 bg-[linear-gradient(to_bottom,#5c5c66,#45454f)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
    inner: "border-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]",
    slatPrimary: "#a1a1aa",
    slatSecondary: "#71717a",
    glow: "rgba(220,225,235,0.6)",
    dark: "#0d0d10",
    mullion: "#c1c9d5",
    breakpoint: 75,
  },
};

interface SlatSpec {
  body: number; // px height of the slat itself
  gap: number; // px height of the shadow groove
}

const SLAT_SIZES: Record<ShutterSlatSize, SlatSpec> = {
  fine: { body: 6, gap: 2 },
  medium: { body: 8, gap: 3 },
  thick: { body: 12, gap: 4 },
  chunky: { body: 16, gap: 5 },
};

function buildSlats(v: VariantStyle, slat: SlatSpec) {
  const total = slat.body + slat.gap;
  return `repeating-linear-gradient(to bottom, ${v.slatPrimary} 0px, ${v.slatPrimary} ${slat.body}px, ${v.slatSecondary} ${slat.body}px, ${v.slatSecondary} ${total}px)`;
}

function buildHoleBackground(
  shape: ShutterHoleShape,
  color: string,
  slat: SlatSpec
): { image: string; size: string; position: string } {
  const total = slat.body + slat.gap;
  const tile = `${total}px ${total}px`;
  const center = `${total / 2}px ${slat.body / 2}px`;

  if (shape === "circle") {
    return {
      image: `radial-gradient(circle, ${color} 1.1px, transparent 1.2px)`,
      size: tile,
      position: center,
    };
  }
  if (shape === "ellipse") {
    return {
      image: `radial-gradient(ellipse 2.6px 1.1px at center, ${color} 0, ${color} 60%, transparent 100%)`,
      size: tile,
      position: center,
    };
  }
  // rectangle: render via inline SVG so we get true rectangular slits.
  const rectW = Math.min(total * 0.55, 5);
  const rectH = Math.max(1.5, slat.body * 0.45);
  const rectX = (total - rectW) / 2;
  const rectY = (slat.body - rectH) / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${total}" height="${total}"><rect x="${rectX}" y="${rectY}" width="${rectW}" height="${rectH}" rx="0.4" fill="${color}"/></svg>`;
  return {
    image: `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}")`,
    size: tile,
    position: "0 0",
  };
}

interface SizeStyle {
  panel: string;
  squarePanel: string;
  frameRadius: string;
  innerRadius: string;
  framePadding: string;
  panelGap: string;
}

const SIZES: Record<ShutterSize, SizeStyle> = {
  sm: {
    panel: "w-24 h-40",
    squarePanel: "size-32",
    frameRadius: "rounded-[1.5rem]",
    innerRadius: "rounded-[1.15rem]",
    framePadding: "p-1.5",
    panelGap: "gap-1.5",
  },
  md: {
    panel: "w-28 h-48",
    squarePanel: "size-40",
    frameRadius: "rounded-[1.75rem]",
    innerRadius: "rounded-[1.35rem]",
    framePadding: "p-1.5",
    panelGap: "gap-1.5",
  },
  lg: {
    panel: "w-36 h-60",
    squarePanel: "size-52",
    frameRadius: "rounded-[2rem]",
    innerRadius: "rounded-[1.6rem]",
    framePadding: "p-2",
    panelGap: "gap-2",
  },
  xl: {
    panel: "w-48 h-72",
    squarePanel: "size-72",
    frameRadius: "rounded-[2.25rem]",
    innerRadius: "rounded-[1.85rem]",
    framePadding: "p-2.5",
    panelGap: "gap-2.5",
  },
};

interface ShapeStyle {
  panelClass?: string;
  innerStyle?: React.CSSProperties;
  frameStyle?: React.CSSProperties;
  frameRadius?: string;
  innerRadius?: string;
  /** Override gap between panels on the frame row. */
  panelGap?: string;
  /** Decorative mullions (window crossbars) drawn over the shutter visual. */
  mullionVertical?: boolean;
  mullionHorizontal?: boolean;
}

const SINGLE_ARCH_FRAME_STYLE: CSSProperties = {
  borderTopLeftRadius: "100% 50%",
  borderTopRightRadius: "100% 50%",
  borderBottomLeftRadius: "0.9rem",
  borderBottomRightRadius: "0.9rem",
};

const SINGLE_ARCH_PANEL_STYLE: CSSProperties = {
  borderTopLeftRadius: "100% 48%",
  borderTopRightRadius: "100% 48%",
  borderBottomLeftRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
};

function getSingleArchFrameShape(): ShapeStyle {
  return {
    frameStyle: SINGLE_ARCH_FRAME_STYLE,
    frameRadius: "rounded-none",
  };
}

function getSingleArchPanelShape(): ShapeStyle {
  return {
    innerStyle: SINGLE_ARCH_PANEL_STYLE,
    frameRadius: "rounded-none",
    innerRadius: "rounded-none",
  };
}

function getFrameShapeStyle(shape: ShutterShape, size: SizeStyle, panels: ShutterPanels): ShapeStyle {
  switch (shape) {
    case "rectangle":
      return {};
    case "arch":
      if (panels === 2) {
        return { panelGap: "gap-1.5" };
      }
      return getSingleArchFrameShape();
    case "round":
      return {
        frameStyle: { borderRadius: "9999px" },
        frameRadius: "rounded-none",
      };
    case "porthole":
      return {
        frameStyle: {
          borderRadius: "9999px",
          padding: "0.625rem",
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), rgba(0,0,0,0.05) 60%)",
          boxShadow: "inset 0 0 0 2px rgba(0,0,0,0.15)",
        },
        frameRadius: "rounded-none",
      };
    case "gothic":
      return {
        frameStyle: {
          clipPath: "polygon(0% 22%, 50% 0%, 100% 22%, 100% 100%, 0% 100%)",
        },
        frameRadius: "rounded-none",
      };
    case "casement":
      // Classic European casement: sharp 90° corners, slim frame, with a
      // cross of mullions dividing the pane into 4 quadrants — the typical
      // Classic 4-pane casement look behind which a real shutter sits.
      return {
        frameRadius: "rounded-sm",
        innerRadius: "rounded-none",
        mullionVertical: true,
        mullionHorizontal: true,
      };
    case "sash":
      // Vertical sash window (upper / lower pane) — only a horizontal
      // mullion across the middle.
      return {
        frameRadius: "rounded-sm",
        innerRadius: "rounded-none",
        mullionHorizontal: true,
      };
    default:
      return {};
  }
}

function getPanelShapeStyle(
  shape: ShutterShape,
  size: SizeStyle,
  panels: ShutterPanels,
  panelIndex: number
): ShapeStyle {
  switch (shape) {
    case "rectangle":
      return {};
    case "arch":
      return getSingleArchPanelShape();
    case "round":
      return {
        panelClass: size.squarePanel,
        innerStyle: { borderRadius: "9999px" },
        frameRadius: "rounded-none",
        innerRadius: "rounded-none",
      };
    case "porthole":
      return {
        panelClass: size.squarePanel,
        innerStyle: { borderRadius: "9999px" },
        frameRadius: "rounded-none",
        innerRadius: "rounded-none",
      };
    case "gothic":
      return {
        innerStyle: {
          clipPath: "polygon(0% 25%, 50% 0%, 100% 25%, 100% 100%, 0% 100%)",
        },
        frameRadius: "rounded-none",
        innerRadius: "rounded-none",
      };
    case "casement":
      return {
        frameRadius: "rounded-sm",
        innerRadius: "rounded-none",
        mullionVertical: true,
        mullionHorizontal: true,
      };
    case "sash":
      return {
        frameRadius: "rounded-sm",
        innerRadius: "rounded-none",
        mullionHorizontal: true,
      };
    default:
      return {};
  }
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

/** ms per 1% level → seconds for a full 0→100% close (travel + seal, equal speeds). */
function msPerPctToCloseSeconds(msPerPct: number) {
  return (msPerPct * 100) / 1000;
}

function closeSecondsToMsPerPct(seconds: number) {
  return (seconds * 1000) / 100;
}

const CLOSE_DURATION_PRESETS = [
  { label: "Fast", seconds: 3 },
  { label: "Normal", seconds: 6 },
  { label: "Slow", seconds: 10 },
] as const;

const CLOSE_DURATION_MIN = 2;
const CLOSE_DURATION_MAX = 14;

interface MotorSpeedControlProps {
  travelSpeedMs: number;
  sealSpeedMs: number;
  isTravelControlled: boolean;
  isSealControlled: boolean;
  motorSpeedControlled: boolean;
  onTravelMotorSpeedChange?: (value: number) => void;
  onSealMotorSpeedChange?: (value: number) => void;
  onMotorSpeedChange?: (value: number) => void;
  setInternalTravelSpeed: (value: number) => void;
  setInternalSealSpeed: (value: number) => void;
}

function MotorSpeedControl({
  travelSpeedMs,
  sealSpeedMs,
  isTravelControlled,
  isSealControlled,
  motorSpeedControlled,
  onTravelMotorSpeedChange,
  onSealMotorSpeedChange,
  onMotorSpeedChange,
  setInternalTravelSpeed,
  setInternalSealSpeed,
}: MotorSpeedControlProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const applyMsPerPct = (msPerPct: number) => {
    const next = clamp(msPerPct, 30, 180);
    if (!isTravelControlled && !motorSpeedControlled) {
      setInternalTravelSpeed(next);
    }
    if (!isSealControlled && !motorSpeedControlled) {
      setInternalSealSpeed(next);
    }
    onTravelMotorSpeedChange?.(next);
    onSealMotorSpeedChange?.(next);
    if (!onTravelMotorSpeedChange && !onSealMotorSpeedChange && onMotorSpeedChange) {
      onMotorSpeedChange(next / 2);
    }
  };

  const unifiedMs = Math.round((travelSpeedMs + sealSpeedMs) / 2);
  const closeSeconds = clamp(
    msPerPctToCloseSeconds(unifiedMs),
    CLOSE_DURATION_MIN,
    CLOSE_DURATION_MAX
  );
  const totalCloseSeconds = (50 * travelSpeedMs + 50 * sealSpeedMs) / 1000;

  const presetClass = (active: boolean) =>
    cn(
      "rounded-md border px-2.5 py-1 text-xs font-medium transition",
      active
        ? "border-foreground bg-foreground text-background"
        : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
    );

  return (
    <div className="w-full max-w-[260px] space-y-2.5 rounded-xl border border-border bg-muted/30 p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-foreground">Motor speed</span>
        <span className="text-xs tabular-nums text-muted-foreground">
          ~{(showAdvanced ? totalCloseSeconds : closeSeconds).toFixed(1)}s close
        </span>
      </div>

      {!showAdvanced && (
        <>
          <div className="flex justify-center gap-1.5" role="group" aria-label="Speed presets">
            {CLOSE_DURATION_PRESETS.map((preset) => {
              const active = Math.abs(closeSeconds - preset.seconds) < 0.6;
              return (
                <button
                  key={preset.label}
                  type="button"
                  className={presetClass(active)}
                  aria-pressed={active}
                  onClick={() => applyMsPerPct(closeSecondsToMsPerPct(preset.seconds))}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>

          <div>
            <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
              <span>Faster</span>
              <span>Slower</span>
            </div>
            <input
              type="range"
              min={CLOSE_DURATION_MIN}
              max={CLOSE_DURATION_MAX}
              step={0.5}
              value={closeSeconds}
              onChange={(event) => applyMsPerPct(closeSecondsToMsPerPct(Number(event.target.value)))}
              aria-label="Time to fully close the shutter"
              aria-valuetext={`${closeSeconds.toFixed(1)} seconds`}
              className="w-full accent-foreground"
            />
          </div>
        </>
      )}

      <button
        type="button"
        className="w-full text-center text-[10px] text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
        aria-expanded={showAdvanced}
        onClick={() => setShowAdvanced((open) => !open)}
      >
        {showAdvanced ? "Hide advanced" : "Advanced (two phases)"}
      </button>

      {showAdvanced && (
        <div className="space-y-2">
          <p className="text-[10px] leading-snug text-muted-foreground">
            First half lowers the shutter; second half seals the slats. Lower ms = faster.
          </p>
          <div>
            <label className="mb-1 block text-[10px] text-muted-foreground">
              Lowering (0→50%): {Math.round(travelSpeedMs)} ms per %
            </label>
            <input
              type="range"
              min={30}
              max={180}
              step={5}
              value={travelSpeedMs}
              onChange={(event) => {
                const next = Number(event.target.value);
                if (!isTravelControlled && !motorSpeedControlled) {
                  setInternalTravelSpeed(next);
                }
                onTravelMotorSpeedChange?.(next);
                if (!onTravelMotorSpeedChange && onMotorSpeedChange) {
                  onMotorSpeedChange(next / 2);
                }
              }}
              aria-label="Lowering phase speed"
              className="w-full accent-foreground"
            />
          </div>
          <div>
            <label className="mb-1 block text-[10px] text-muted-foreground">
              Sealing (50→100%): {Math.round(sealSpeedMs)} ms per %
            </label>
            <input
              type="range"
              min={30}
              max={180}
              step={5}
              value={sealSpeedMs}
              onChange={(event) => {
                const next = Number(event.target.value);
                if (!isSealControlled && !motorSpeedControlled) {
                  setInternalSealSpeed(next);
                }
                onSealMotorSpeedChange?.(next);
                if (!onSealMotorSpeedChange && onMotorSpeedChange) {
                  onMotorSpeedChange(next / 2);
                }
              }}
              aria-label="Sealing phase speed"
              className="w-full accent-foreground"
            />
          </div>
        </div>
      )}
    </div>
  );
}

interface ShutterPanelProps {
  level: number;
  variant: VariantStyle;
  size: SizeStyle;
  shape: ShapeStyle;
  slat: SlatSpec;
  curved: boolean;
  holeShape: ShutterHoleShape;
  paneBackground: string;
  paneOverlay?: string;
  ariaLabel: string;
  onUserChange: (next: number) => void;
  onUserStart: () => void;
}

function ShutterPanel({
  level,
  variant,
  size,
  shape,
  slat,
  curved,
  holeShape,
  paneBackground,
  paneOverlay,
  ariaLabel,
  onUserChange,
  onUserStart,
}: ShutterPanelProps) {
  const inputPct = clamp(level);
  const travelPct = inputPct <= 50 ? inputPct * 2 : 100;
  const openPct = 100 - travelPct;
  const sealProgress = inputPct <= 50 ? 0 : (inputPct - 50) / 50;
  const [panelHeightPx, setPanelHeightPx] = useState(0);
  const pitchPx = slat.body + slat.gap;
  const rowsCount = Math.max(1, Math.floor(panelHeightPx / pitchPx));
  const closedRows = Math.floor(sealProgress * rowsCount);
  const closedRowsPct = (closedRows / rowsCount) * 100;
  const darkness = sealProgress * 0.88;
  const terminalBarHeight = slat.body;

  const slatsImage = buildSlats(variant, slat);
  const hole = buildHoleBackground(holeShape, variant.glow, slat);

  const ref = useRef<HTMLDivElement>(null);
  const draggingRef = useRef<boolean>(false);


  const setFromY = (clientY: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = (clientY - rect.top) / rect.height;
    onUserChange(clamp(ratio * 100));
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setPanelHeightPx(el.clientHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="slider"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={level}
      tabIndex={0}
      onPointerDown={(e) => {
        e.preventDefault();
        onUserStart();
        draggingRef.current = true;
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        setFromY(e.clientY);
      }}
      onPointerMove={(e) => {
        if (!draggingRef.current) return;
        setFromY(e.clientY);
      }}
      onPointerUp={(e) => {
        draggingRef.current = false;
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      }}
      onPointerCancel={() => {
        draggingRef.current = false;
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          onUserStart();
          onUserChange(level + (e.shiftKey ? 10 : 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          onUserStart();
          onUserChange(level - (e.shiftKey ? 10 : 1));
        } else if (e.key === "Home") {
          e.preventDefault();
          onUserStart();
          onUserChange(0);
        } else if (e.key === "End") {
          e.preventDefault();
          onUserStart();
          onUserChange(100);
        }
      }}
      className={cn(
        "relative cursor-ns-resize touch-none select-none overflow-hidden border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        shape.panelClass ?? size.panel,
        shape.innerRadius ?? size.innerRadius,
        variant.inner
      )}
      style={{ backgroundColor: paneBackground, ...shape.innerStyle }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-2 bg-gradient-to-r from-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-2 bg-gradient-to-l from-black/10 to-transparent" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: paneBackground }}
      />
      {paneOverlay ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: paneOverlay }}
        />
      ) : null}

      {/* Moving shutter sheet: full-size element translated upward while opening.
          This keeps slats constant and creates real "scrolling up" behavior. */}
      <div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ transform: `translateY(-${openPct}%)` }}
      >
        {/* Slats body */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: slatsImage,
            filter: `brightness(${1 - darkness * 0.45})`,
          }}
        />

        {/* Perforation glow — fades out as holes close. The shape (circle /
            ellipse / rectangle slit) is configurable via the `holeShape` prop. */}
        {variant.glow !== "transparent" && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: hole.image,
              backgroundSize: hole.size,
              backgroundPosition: hole.position,
            }}
          />
        )}

        {/* Progressive closure of perforations: as it nears full close, solid
            rows rise from the bottom and gradually replace the holes. */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-x-0 bottom-0"
            style={{
              height: `${closedRowsPct}%`,
              backgroundImage: slatsImage,
            }}
          />
        </div>

        {/* Terminal slat (fondello) with end-stops. Same thickness as all slats. */}
        <div
          className="absolute inset-x-0 bottom-0 z-20"
          style={{
            height: `${terminalBarHeight}px`,
            backgroundColor: variant.slatPrimary,
            boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.28)",
          }}
        >
          <div
            className="absolute left-[16%] top-1/2 h-[4px] w-[7px] -translate-y-1/2 rounded-full border border-black/25"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${variant.slatPrimary}, ${variant.slatSecondary})`,
            }}
          />
          <div
            className="absolute right-[16%] top-1/2 h-[4px] w-[7px] -translate-y-1/2 rounded-full border border-black/25"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${variant.slatPrimary}, ${variant.slatSecondary})`,
            }}
          />
        </div>

        {/* Cylindrical shading: dark on the sides, slight highlight in the
            middle, a touch of bottom shadow. Gives the shutter a 3D bulge. */}
        {curved && (
          <>
            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.32), rgba(0,0,0,0.08) 18%, rgba(255,255,255,0.18) 50%, rgba(0,0,0,0.08) 82%, rgba(0,0,0,0.32))",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.18))",
              }}
            />
          </>
        )}

        {/* Darkness overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: variant.dark,
            opacity: darkness,
            zIndex: 30,
          }}
        />
      </div>

      {/* Decorative mullions — sit on top of the shutter visual so the
          window grid stays visible at any opening level. */}
      {shape.mullionVertical && (
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[3px] -translate-x-1/2 shadow-[0_0_0_1px_rgba(0,0,0,0.18)]"
          style={{ backgroundColor: variant.mullion }}
        />
      )}
      {shape.mullionHorizontal && (
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 z-20 h-[3px] -translate-y-1/2 shadow-[0_0_0_1px_rgba(0,0,0,0.18)]"
          style={{ backgroundColor: variant.mullion }}
        />
      )}
    </div>
  );
}

export function Shutter({
  level: levelProp,
  defaultLevel = 0,
  onLevelChange,
  levels: levelsProp,
  defaultLevels,
  onLevelsChange,
  variant = "classic",
  size = "md",
  shape = "rectangle",
  panels = 1,
  panelMode = "sync",
  stagger = 0,
  slatSize = "medium",
  curved = false,
  holeShape = "ellipse",
  motorSpeedMs: motorSpeedMsProp,
  defaultMotorSpeedMs = 60,
  onMotorSpeedChange,
  travelMotorSpeedMs: travelMotorSpeedMsProp,
  sealMotorSpeedMs: sealMotorSpeedMsProp,
  defaultTravelMotorSpeedMs,
  defaultSealMotorSpeedMs,
  onTravelMotorSpeedChange,
  onSealMotorSpeedChange,
  showSpeedControl = true,
  label,
  hideReadout = false,
  paneBackground = DEFAULT_PANE_BACKGROUND,
  paneOverlay,
  className,
}: ShutterProps) {
  const isControlled = levelsProp !== undefined || levelProp !== undefined;
  const isTravelControlled = travelMotorSpeedMsProp !== undefined;
  const isSealControlled = sealMotorSpeedMsProp !== undefined;
  const baseDefaultSpeed = motorSpeedMsProp ?? defaultMotorSpeedMs;
  const [internalTravelSpeed, setInternalTravelSpeed] = useState(
    defaultTravelMotorSpeedMs ?? baseDefaultSpeed * 2
  );
  const [internalSealSpeed, setInternalSealSpeed] = useState(
    defaultSealMotorSpeedMs ?? baseDefaultSpeed * 2
  );
  const travelSpeedMs = isTravelControlled
    ? travelMotorSpeedMsProp!
    : motorSpeedMsProp !== undefined
      ? motorSpeedMsProp * 2
      : internalTravelSpeed;
  const sealSpeedMs = isSealControlled
    ? sealMotorSpeedMsProp!
    : motorSpeedMsProp !== undefined
      ? motorSpeedMsProp * 2
      : internalSealSpeed;

  const initialLevels = useMemo<number[]>(() => {
    if (defaultLevels && defaultLevels.length > 0) {
      return Array.from({ length: panels }, (_, i) => defaultLevels[i] ?? defaultLevels[0] ?? 0);
    }
    return Array.from({ length: panels }, () => defaultLevel);
    // Initial-only: panels & defaults are not expected to mutate at runtime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [internalLevels, setInternalLevels] = useState<number[]>(initialLevels);

  const levels: number[] = useMemo(() => {
    if (levelsProp) {
      return Array.from({ length: panels }, (_, i) => levelsProp[i] ?? levelsProp[0] ?? 0);
    }
    if (levelProp !== undefined) {
      return Array.from({ length: panels }, () => levelProp);
    }
    return internalLevels;
  }, [levelsProp, levelProp, internalLevels, panels]);

  const levelsRef = useRef<number[]>(levels);
  useEffect(() => {
    levelsRef.current = levels;
  }, [levels]);

  const rafRefs = useRef<(number | null)[]>([null, null]);
  const animTokens = useRef<number[]>([0, 0]);

  const cancelPanelAnim = (index: number) => {
    animTokens.current[index] += 1;
    if (rafRefs.current[index] !== null) {
      cancelAnimationFrame(rafRefs.current[index]!);
      rafRefs.current[index] = null;
    }
  };

  const cancelAllAnims = () => {
    for (let i = 0; i < rafRefs.current.length; i++) cancelPanelAnim(i);
  };

  useEffect(() => () => cancelAllAnims(), []);

  const commitLevels = (next: number[]) => {
    levelsRef.current = next;
    if (!isControlled) setInternalLevels(next);
    onLevelsChange?.(next);
    onLevelChange?.(next[0]);
  };

  const handlePanelChange = (index: number, value: number) => {
    const clamped = clamp(value);
    const current = levelsRef.current;
    let next: number[];
    if (panelMode === "sync") {
      next = current.map(() => clamped);
    } else {
      next = [...current];
      next[index] = clamped;
    }
    commitLevels(next);
  };

  const animatePanelTo = (index: number, target: number) => {
    cancelPanelAnim(index);
    const start = levelsRef.current[index];
    const distance = target - start;
    if (distance === 0) return;
    animTokens.current[index] += 1;
    const token = animTokens.current[index];
    const startLevel = clamp(start);
    const targetLevel = clamp(target);
    const segments: Array<{ from: number; to: number; duration: number }> = [];

    if (startLevel < 50 && targetLevel > 50) {
      segments.push({
        from: startLevel,
        to: 50,
        duration: (50 - startLevel) * travelSpeedMs,
      });
      segments.push({
        from: 50,
        to: targetLevel,
        duration: (targetLevel - 50) * sealSpeedMs,
      });
    } else if (startLevel > 50 && targetLevel < 50) {
      segments.push({
        from: startLevel,
        to: 50,
        duration: (startLevel - 50) * sealSpeedMs,
      });
      segments.push({
        from: 50,
        to: targetLevel,
        duration: (50 - targetLevel) * travelSpeedMs,
      });
    } else {
      segments.push({
        from: startLevel,
        to: targetLevel,
        duration:
          Math.abs(targetLevel - startLevel) * (startLevel <= 50 ? travelSpeedMs : sealSpeedMs),
      });
    }

    const runSegment = (idx: number) => {
      if (animTokens.current[index] !== token) return;
      const seg = segments[idx];
      if (!seg || seg.duration <= 0) {
        if (seg) handleSegmentCommit(seg.to);
        if (segments[idx + 1]) runSegment(idx + 1);
        return;
      }
      const t0 = performance.now();
      const tick = (now: number) => {
        if (animTokens.current[index] !== token) return;
        const t = Math.min(1, (now - t0) / seg.duration);
        const next = seg.from + (seg.to - seg.from) * t;
        handleSegmentCommit(next);
        if (t < 1) {
          rafRefs.current[index] = requestAnimationFrame(tick);
        } else {
          rafRefs.current[index] = null;
          if (segments[idx + 1]) runSegment(idx + 1);
        }
      };
      rafRefs.current[index] = requestAnimationFrame(tick);
    };

    const handleSegmentCommit = (next: number) => {
      const current = levelsRef.current;
      let arr: number[];
      if (panelMode === "sync") {
        arr = current.map(() => next);
      } else {
        arr = [...current];
        arr[index] = next;
      }
      commitLevels(arr);
    };

    runSegment(0);
  };

  const animateAllTo = (target: number) => {
    if (panelMode === "sync") {
      animatePanelTo(0, target);
      return;
    }
    for (let i = 0; i < panels; i++) {
      const delay = stagger * i;
      if (delay <= 0) {
        animatePanelTo(i, target);
      } else {
        const idx = i;
        window.setTimeout(() => animatePanelTo(idx, target), delay);
      }
    }
  };

  const v = VARIANTS[variant];
  const s = SIZES[size];
  const frameShape = getFrameShapeStyle(shape, s, panels);
  const singleArchFrame = getSingleArchFrameShape();
  const singleArchPanel = getSingleArchPanelShape();
  const slat = SLAT_SIZES[slatSize];
  const isDoubleArch = shape === "arch" && panels === 2;

  const buttonBase =
    "grid size-9 place-items-center rounded-lg border border-border bg-background text-foreground transition hover:bg-muted active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  const baseLabel = label ? `Shutter ${label}` : "Shutter";
  const readout =
    panels === 2 && panelMode === "independent"
      ? `${Math.round(levels[0])}% / ${Math.round(levels[1])}%`
      : `${Math.round(levels[0])}%`;

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      {isDoubleArch ? (
        <div className={cn("inline-flex items-end", frameShape.panelGap ?? s.panelGap)}>
          {Array.from({ length: panels }, (_, i) => (
            <div
              key={i}
              className={cn(
                singleArchFrame.frameRadius,
                s.framePadding,
                v.frame
              )}
              style={singleArchFrame.frameStyle}
            >
              <ShutterPanel
                level={levels[i] ?? 0}
                variant={v}
                size={s}
                shape={singleArchPanel}
                slat={slat}
                curved={curved}
                holeShape={holeShape}
                paneBackground={paneBackground}
                paneOverlay={paneOverlay}
                ariaLabel={`${baseLabel} ${i === 0 ? "left" : "right"}`}
                onUserChange={(value) => handlePanelChange(i, value)}
                onUserStart={() => {
                  if (panelMode === "sync") cancelAllAnims();
                  else cancelPanelAnim(i);
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div
          className={cn(
            "inline-flex",
            frameShape.frameRadius ?? s.frameRadius,
            s.framePadding,
            frameShape.panelGap ?? s.panelGap,
            v.frame
          )}
          style={frameShape.frameStyle}
        >
          {Array.from({ length: panels }, (_, i) => (
            <ShutterPanel
              key={i}
              level={levels[i] ?? 0}
              variant={v}
              size={s}
              shape={getPanelShapeStyle(shape, s, panels, i)}
              slat={slat}
              curved={curved}
              holeShape={holeShape}
              paneBackground={paneBackground}
              paneOverlay={paneOverlay}
              ariaLabel={panels === 2 ? `${baseLabel} ${i === 0 ? "left" : "right"}` : baseLabel}
              onUserChange={(value) => handlePanelChange(i, value)}
              onUserStart={() => {
                if (panelMode === "sync") cancelAllAnims();
                else cancelPanelAnim(i);
              }}
            />
          ))}
        </div>
      )}

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => animateAllTo(0)}
          aria-label="Open shutter"
          className={buttonBase}
        >
          <ChevronUp className="size-4" />
        </button>
        <button
          type="button"
          onClick={cancelAllAnims}
          aria-label="Stop motor"
          className={buttonBase}
        >
          <Square className="size-3.5" />
        </button>
        <button
          type="button"
          onClick={() => animateAllTo(100)}
          aria-label="Close shutter"
          className={buttonBase}
        >
          <ChevronDown className="size-4" />
        </button>
      </div>

      {showSpeedControl && (
        <MotorSpeedControl
          travelSpeedMs={travelSpeedMs}
          sealSpeedMs={sealSpeedMs}
          isTravelControlled={isTravelControlled}
          isSealControlled={isSealControlled}
          motorSpeedControlled={motorSpeedMsProp !== undefined}
          onTravelMotorSpeedChange={onTravelMotorSpeedChange}
          onSealMotorSpeedChange={onSealMotorSpeedChange}
          onMotorSpeedChange={onMotorSpeedChange}
          setInternalTravelSpeed={setInternalTravelSpeed}
          setInternalSealSpeed={setInternalSealSpeed}
        />
      )}

      {(label || !hideReadout) && (
        <div className="text-center">
          {label && <p className="text-sm font-medium text-foreground">{label}</p>}
          {!hideReadout && (
            <p className="text-xs tabular-nums text-muted-foreground">Position: {readout}</p>
          )}
        </div>
      )}
    </div>
  );
}
