/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  theme: {
    fontFamily: {
      "space-mono": ['"Space Mono"', "monospace"],
      "exo-2": ['"Exo 2"', "sans-serif"],
    },
    extend: {
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  safelist: ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"],
  plugins: [],
};
