export const SITE_URL = "https://shutter-designui.vercel.app";

export const CHUMY_REGISTRY_URL = `${SITE_URL}/r/{name}.json`;

export const CHUMY_REGISTRY_LOCAL_URL = "http://localhost:3000/r/{name}.json";

export function presetName(templateId: string, variant: string) {
  return `shutter-${templateId}-${variant}`;
}

export function presetInstallCommand(templateId: string, variant: string) {
  return `npx shadcn@latest add @chumy/${presetName(templateId, variant)}`;
}

export const REGISTRY_SETUP_COMMAND = `npx shadcn@latest registry add @chumy=${CHUMY_REGISTRY_URL}`;

export const REGISTRY_SETUP_LOCAL_COMMAND = `npx shadcn@latest registry add @chumy=${CHUMY_REGISTRY_LOCAL_URL}`;

export const SHUTTER_BASE_COMMAND = "npx shadcn@latest add @chumy/shutter";
