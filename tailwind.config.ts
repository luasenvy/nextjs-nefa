import TailwindAspectRatio from "@tailwindcss/aspect-ratio";
import TailwindForms from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-poppins)", "sans-serif"],
    },
    extend: {},
  },
  plugins: [TailwindForms, TailwindAspectRatio],
} satisfies Config;
