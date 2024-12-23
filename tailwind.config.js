/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito sans", "sans-serif"],
      },
      screens: {
        max: { max: "88.125em" },
        "xl-s": { max: "81.25em" },
        "lg-s": { max: "70em" },
        "md-s": { max: "64em" },
        "sm-s": { max: "56.25em" },
        "tb-l": { max: "47.9375em" },
        tb: { max: "37.5em" },
        "mb-l": { max: "30em" },
        mb: { max: "20em" },
      },
    },
  },
  plugins: [],
};
