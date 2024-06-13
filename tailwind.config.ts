/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./docs-v1/components/*.{js,ts,jsx,tsx}",
    "./docs-v1/components/**/*.{js,ts,jsx,tsx}",
    "./docs-v1/pages/*.{js,ts,jsx,tsx}",
    "./docs-v1/pages/**/*.{js,ts,jsx,tsx}",
    "./docs-v1/constants/*.{ts,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      // Remove largest breakpoint, while keeping everything else at Tailwind defaults.
      // https://tailwindcss.com/docs/breakpoints
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1448px",
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      mono: [
        "Source Code Pro",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },

    fontSize: {
      // Defaults are: https://tailwindcss.com/docs/font-size
      xs: ["0.75rem", { lineHeight: "1.5rem", letterSpacing: "0.1em" }],
      sm: ["0.875rem", { lineHeight: "1.75rem", letterSpacing: "0.05em" }],
      base: ["1rem", { lineHeight: "2rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2.5rem", letterSpacing: "-0.0125em" }],
      "3xl": ["1.875rem", { lineHeight: "2.5rem", letterSpacing: "-0.025em" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.025em" }],
      "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
      "6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
      "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.035em" }],
      "8xl": ["6rem", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
      "9xl": ["8rem", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
    },

    colors: {
      red: {
        10: "#fff0f0",
        20: "#ffdede",
        30: "#ffc7c7",
        40: "#ffabab",
        50: "#ff8c8c",
        60: "#ff6c6c",
        70: "#ff4b4b",
        80: "#ff2b2b",
        90: "#d61111",
        100: "#a80000",
      },
      orange: {
        10: "#fffae8",
        20: "#fff6d0",
        30: "#ffecb0",
        40: "#ffe08e",
        50: "#ffd16a",
        60: "#ffbd45",
        70: "#ffa421",
        80: "#ff8700",
        90: "#ed6f13",
        100: "#d95a00",
      },
      yellow: {
        10: "#ffffe1",
        20: "#ffffc2",
        30: "#ffffa0",
        40: "#ffff7d",
        50: "#ffff59",
        60: "#fff835",
        70: "#ffe312",
        80: "#faca2b",
        90: "#edbb16",
        100: "#dea816",
      },
      green: {
        10: "#dffde9",
        20: "#c0fcd3",
        30: "#9ef6bb",
        40: "#7defa1",
        50: "#5ce488",
        60: "#3dd56d",
        70: "#21c354",
        80: "#09ab3b",
        90: "#158237",
        100: "#177233",
      },
      acqua: {
        10: "#dcfffb",
        20: "#bafff7",
        30: "#93ffee",
        40: "#6bfde3",
        50: "#45f4d5",
        60: "#20e7c5",
        70: "#00d4b1",
        80: "#29b09d",
        90: "#2c867c",
        100: "#246e69",
      },
      lightBlue: {
        10: "#e0feff",
        20: "#bffdff",
        30: "#9af8ff",
        40: "#73efff",
        50: "#4be4ff",
        60: "#24d4ff",
        70: "#00c0f2",
        80: "#00A4D4",
        90: "#0D8CB5",
        100: "#15799E",
      },
      darkBlue: {
        10: "#e4f5ff",
        20: "#c7ebff",
        30: "#a6dcff",
        40: "#83c9ff",
        50: "#60b4ff",
        60: "#3d9df3",
        70: "#1c83e1",
        80: "#0068c9",
        90: "#0054a3",
        100: "#004280",
      },
      indigo: {
        10: "#f5ebff",
        20: "#ebd6ff",
        30: "#dbbbff",
        40: "#c89dff",
        50: "#b27eff",
        60: "#9a5dff",
        70: "#803df5",
        80: "#6d3fc0",
        90: "#583f84",
        100: "#3f3163",
      },
      gray: {
        10: "#fafafa",
        20: "#f0f2f6",
        30: "#e6eaf1",
        40: "#d5dae5",
        50: "#bfc5d3",
        60: "#a3a8b8",
        70: "#808495",
        80: "#555867",
        90: "#37352F",
        100: "#0e1117",
      },
      white: "#ffffff",
      light_purple: "#F9F8FD",
      color_violet: "#7147E8",
      lt_gray: "#E6E2EF",
      color_condense_violet: "#8D6AF1",
      blue: "#2EAADC",
      pink: "#B02AAC",
    },

    extend: {
      minWidth: {
        56: "14rem",
      },

      height: {
        80: "20rem",
      },

      width: {
        80: "20rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        160: "40rem",
        320: "80rem",
        "1/2-gap-8": "calc(50% - 4rem/2)",
        "1/3-gap-8": "calc(33.333333% - 4rem/3)",
      },

      overflow: {
        overlay: "overlay",
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
