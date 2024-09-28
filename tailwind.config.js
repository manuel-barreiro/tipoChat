/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
import animate from "tailwindcss-animated"

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03FDCC",
        "primary-400": "#67FEE0",
        "primary-300": "#9AFEEA",
        "primary-200": "#CDFEF4",
        "primary-100": "#E5FFFA",
        "primary-disabled": "#02CAA3",
        secondary: "#FFD300",
        "secondary-400": "#FFDC33",
        "secondary-300": "#FFE566",
        "secondary-200": "#FFED99",
        "secondary-100": "#FFED99",
        success: "#1BAC4B",
        info: "#6949FF",
        warning: "#FACC15",
        error: "#F75555",
        disabled: "#D8D8D8",
        "dis-button": "#607D8A",
        "grey-900": "#212121",
        "grey-800": "#424242",
        "grey-700": "#616161",
        "grey-600": "#757575",
        "grey-500": "#9E9E9E",
        "grey-400": "#BDBDBD",
        "grey-300": "#E0E0E0",
        "grey-200": "#EEEEEE",
        "grey-100": "#F5F5F5",
        "grey-50": "#FAFAFA",
        "dark-1": "#181A20",
        "dark-2": "#1F222A",
        "dark-3": "#35383F",
        "input-focus": "#6949FF14",
        white: "#FFFFFF",
        black: "#000000",
        red: "#F54336",
        pink: "#EA1E61",
        purple: "#EA1E61",
        "deep-purple": "#673AB3",
        indigo: "#3F51B2",
        blue: "#1A96F0",
        "light-blue": "#00A9F1",
        cyan: "#00BCD3",
        teal: "#009689",
        green: "#4AAF57",
        "light-green": "#8BC255",
        lime: "#CDDC4C",
        yellow: "#FFEB4F",
        amber: "#FFC02D",
        orange: "#FF981F",
        "deep-orange": "#FF5726",
        brown: "#7A5548",
        "blue-grey": "#607D8A",
      },
      fontFamily: {
        sans: ["Urbanist", ...defaultTheme.fontFamily.sans],
        urbanist: ["Urbanist", "sans-serif"],
      },
      fontSize: {
        "heading-1": ["48px", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-2": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-3": ["32px", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-4": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-5": ["20px", { lineHeight: "1.2", fontWeight: "700" }],
        "heading-6": ["18px", { lineHeight: "1.2", fontWeight: "700" }],
        "body-xlarge": ["20px", { lineHeight: "1.5" }],
        "body-large": ["18px", { lineHeight: "1.5" }],
        "body-medium": ["16px", { lineHeight: "1.5" }],
        "body-small": ["14px", { lineHeight: "1.5" }],
        "body-xsmall": ["12px", { lineHeight: "1.5" }],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      boxShadow: {
        "button-1": "4px 8px 24px 0px rgba(3, 253, 204, 0.25)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    animate,
    function ({ addUtilities, theme }) {
      const newUtilities = {
        // Headings
        ".text-heading-1": {
          fontSize: theme("fontSize.heading-1[0]"),
          lineHeight: theme("fontSize.heading-1[1].lineHeight"),
          fontWeight: theme("fontSize.heading-1[1].fontWeight"),
        },
        ".text-heading-2": {
          fontSize: theme("fontSize.heading-2[0]"),
          lineHeight: theme("fontSize.heading-2[1].lineHeight"),
          fontWeight: theme("fontSize.heading-2[1].fontWeight"),
        },
        ".text-heading-3": {
          fontSize: theme("fontSize.heading-3[0]"),
          lineHeight: theme("fontSize.heading-3[1].lineHeight"),
          fontWeight: theme("fontSize.heading-3[1].fontWeight"),
        },
        ".text-heading-4": {
          fontSize: theme("fontSize.heading-4[0]"),
          lineHeight: theme("fontSize.heading-4[1].lineHeight"),
          fontWeight: theme("fontSize.heading-4[1].fontWeight"),
        },
        ".text-heading-5": {
          fontSize: theme("fontSize.heading-5[0]"),
          lineHeight: theme("fontSize.heading-5[1].lineHeight"),
          fontWeight: theme("fontSize.heading-5[1].fontWeight"),
        },
        ".text-heading-6": {
          fontSize: theme("fontSize.heading-6[0]"),
          lineHeight: theme("fontSize.heading-6[1].lineHeight"),
          fontWeight: theme("fontSize.heading-6[1].fontWeight"),
        },

        // Body
        ".text-body-xlarge": {
          fontSize: theme("fontSize.body-xlarge[0]"),
          lineHeight: theme("fontSize.body-xlarge[1].lineHeight"),
        },
        ".text-body-large": {
          fontSize: theme("fontSize.body-large[0]"),
          lineHeight: theme("fontSize.body-large[1].lineHeight"),
        },
        ".text-body-medium": {
          fontSize: theme("fontSize.body-medium[0]"),
          lineHeight: theme("fontSize.body-medium[1].lineHeight"),
        },
        ".text-body-small": {
          fontSize: theme("fontSize.body-small[0]"),
          lineHeight: theme("fontSize.body-small[1].lineHeight"),
        },
        ".text-body-xsmall": {
          fontSize: theme("fontSize.body-xsmall[0]"),
          lineHeight: theme("fontSize.body-xsmall[1].lineHeight"),
        },
      }
      addUtilities(newUtilities, ["responsive"])
    },
  ],
}
