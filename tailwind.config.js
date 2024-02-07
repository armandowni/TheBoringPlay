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
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#2a323c",
          secondary: "white",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "white",
          secondary: "#2a323c",
        },
      },
    ],
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      transitionProperty: ["hover", "focus"],
    },
  },
  plugins: [require("daisyui")],
};
