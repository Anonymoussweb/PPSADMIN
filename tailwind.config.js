/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        feixenSansR: ["StudioFeixenSansReg", "sans-serif"],
        feixenSansM: ["StudioFeixenSansMed", "sans-serif"],
        feixenSansB: ["StudioFeixenSansBold", "sans-serif"],
        feixenSansL: ["StudioFeixenSansLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
