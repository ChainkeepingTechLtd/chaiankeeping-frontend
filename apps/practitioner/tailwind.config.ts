import type { Config } from "tailwindcss";

import { sharedConfig } from "@chainkeeping/tailwind-config";
import { shadcnPreset } from "@chainkeeping/tailwind-config/lib/shadcn-preset";

const config = {
	...sharedConfig,
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{jsx,tsx,mdx}",
		"./src/pattern/**/*.{jsx,tsx,mdx}",
		"./src/redux/provider.tsx",
	],
	presets: [shadcnPreset],
} satisfies Config;

export default config;
