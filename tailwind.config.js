/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
  theme: {
    fontFamily: {
      "space-mono": ['"Space Mono"', "monospace"],
    },
  },
  safelist: ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"],
  plugins: [],
};
