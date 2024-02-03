module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,tsx}",
    "./layouts/**/*.{js,vue,ts,tsx}",
    "./pages/**/*.{vue,tsx}",
    "./widget/**/*.{vue,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [require("daisyui")],
};
