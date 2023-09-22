/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        purple: "#9747FF",
        blue: "#3289C9",
        yellow: "#EDDE00",
        orange: "#E74623",
        gray: "#D3D4DC",
        partnersBackground: "#404040",
        gold: "#F6AF03",
        navyBlue: "#0540F2",
        lightBlue: "#3289C9",
        heavyBlue: "#255f89",
      },
      fontFamily: {
        barlow: ["barlow", "sans-serif"],
        cormorant: ["Cormorant Garamond", "sans-serif"],
      },
    },
    screens: {
      sm: "776px",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
