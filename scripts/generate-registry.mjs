import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SITE_URL = "https://shutter-designui.vercel.app";
const REGISTRY_URL = `${SITE_URL}/r/{name}.json`;
const GITHUB_HOMEPAGE = "https://github.com/tommasopanizzo/shutter-designui";
const configPath = path.join(root, "registry", "presets.config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const VARIANT_LABELS = {
  classic: "Classic",
  warm: "Warm",
  dark: "Dark",
  minimal: "Minimal",
  industrial: "Industrial",
};

function toPascalCase(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function formatProp(key, value) {
  if (typeof value === "string") {
    return `${key}="${value.replace(/"/g, '\\"')}"`;
  }
  if (typeof value === "boolean") {
    return value ? key : `${key}={false}`;
  }
  if (Array.isArray(value)) {
    return `${key}={[${value.join(", ")}]}`;
  }
  return `${key}={${value}}`;
}

function expandPresets(templates, variants) {
  const presets = [];
  for (const template of templates) {
    for (const variant of variants) {
      const name = `shutter-${template.id}-${variant}`;
      const variantLabel = VARIANT_LABELS[variant] ?? variant;
      presets.push({
        name,
        title: `${template.title} (${variantLabel})`,
        description: `${template.description} Color: ${variantLabel}.`,
        props: {
          ...template.props,
          variant,
          label: `${template.label} · ${variantLabel}`,
        },
      });
    }
  }
  return presets;
}

function generatePresetComponent(preset) {
  const exportName = toPascalCase(preset.name);
  const propsLines = Object.entries(preset.props)
    .map(([k, v]) => `      ${formatProp(k, v)}`)
    .join("\n");

  return `"use client";

import type { ComponentProps } from "react";

import { Shutter } from "@/components/shutter";

/** ${preset.description} */
export function ${exportName}(props: ComponentProps<typeof Shutter>) {
  return (
    <Shutter
${propsLines}
      {...props}
    />
  );
}
`;
}

function rimrafDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

const presets = expandPresets(config.templates, config.variants);
const registryDefaultDir = path.join(root, "registry", "default");
rimrafDir(registryDefaultDir);

const presetItems = [];

for (const preset of presets) {
  const dir = path.join(registryDefaultDir, preset.name);
  const filePath = path.join(dir, `${preset.name}.tsx`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, generatePresetComponent(preset));

  presetItems.push({
    name: preset.name,
    type: "registry:component",
    title: preset.title,
    description: preset.description,
    registryDependencies: ["@chumy/shutter"],
    dependencies: ["lucide-react", "framer-motion"],
    categories: ["shutter"],
    files: [
      {
        path: `registry/default/${preset.name}/${preset.name}.tsx`,
        type: "registry:component",
      },
    ],
  });
}

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "chumy",
  homepage: GITHUB_HOMEPAGE,
  items: [
    {
      name: "shutter",
      type: "registry:ui",
      title: "Shutter",
      description:
        "Base shutter component: drag, motor controls, variants, and window shapes.",
      dependencies: [
        "lucide-react",
        "framer-motion",
        "clsx",
        "tailwind-merge",
      ],
      categories: ["shutter"],
      files: [
        { path: "components/shutter.tsx", type: "registry:ui" },
        { path: "lib/utils.ts", type: "registry:lib" },
      ],
    },
    ...presetItems,
  ],
};

fs.writeFileSync(
  path.join(root, "registry.json"),
  `${JSON.stringify(registry, null, 2)}\n`
);

function generateRegistryMarkdown(templates, variants) {
  const lines = [
    "# @chumy registry",
    "",
    "Every showcase shutter can be installed with the **`@chumy`** namespace (shadcn registry).",
    "",
    "> This is not `npm install`. Use **`npx shadcn@latest add @chumy/...`**",
    "",
    "## Publishing (you)",
    "",
    `1. Live demo: [${SITE_URL}](${SITE_URL})`,
    "2. Registry JSON is served from `public/r/` (commit after each rebuild).",
    "3. After preset changes:",
    "",
    "```bash",
    "npm run registry:build",
    "```",
    "",
    "Commit `public/r/` and push.",
    "",
    "## Consumer setup",
    "",
    "```bash",
    `npx shadcn@latest registry add @chumy=${REGISTRY_URL}`,
    "```",
    "",
    "Local dev (this repo running on port 3000):",
    "",
    "```bash",
    "npx shadcn@latest registry add @chumy=http://localhost:3000/r/{name}.json",
    "```",
    "",
    "## Base component",
    "",
    "```bash",
    "npx shadcn@latest add @chumy/shutter",
    "```",
    "",
    "## Naming pattern",
    "",
    "Each template is available in every color variant:",
    "",
    "```bash",
    "npx shadcn@latest add @chumy/shutter-<template>-<variant>",
    "```",
    "",
    "**Variants:** `classic`, `warm`, `dark`, `minimal`, `industrial`",
    "",
    "## All presets",
    "",
  ];

  for (const template of templates) {
    lines.push(`### ${template.label}`);
    lines.push("");
    lines.push(`| Color | Command |`);
    lines.push(`|-------|---------|`);
    for (const variant of variants) {
      const label = VARIANT_LABELS[variant] ?? variant;
      lines.push(
        `| ${label} | \`npx shadcn@latest add @chumy/shutter-${template.id}-${variant}\` |`
      );
    }
    lines.push("");
  }

  lines.push("## Usage after install");
  lines.push("");
  lines.push("```tsx");
  lines.push('import { ShutterRectangleClassic } from "@/components/shutter-rectangle-classic";');
  lines.push("");
  lines.push("export default function Page() {");
  lines.push("  return <ShutterRectangleClassic />;");
  lines.push("}");
  lines.push("```");
  lines.push("");
  lines.push("Props passed to the preset component override the defaults.");
  lines.push("");

  return lines.join("\n");
}

fs.writeFileSync(
  path.join(root, "REGISTRY.md"),
  generateRegistryMarkdown(config.templates, config.variants)
);

const publicRDir = path.join(root, "public", "r");
rimrafDir(publicRDir);
fs.mkdirSync(publicRDir, { recursive: true });

console.log(
  `Generated ${presets.length} presets (${config.templates.length} templates × ${config.variants.length} variants) and registry.json`
);
