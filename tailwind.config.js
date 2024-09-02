/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  theme: {
    fontFamily: {
      "space-mono": ['"Space Mono"', "monospace"],
    },
    extend: {
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  safelist: ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"],
  plugins: [],
};
