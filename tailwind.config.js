/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#13dddd",

          secondary: "#f742b2",

          accent: "#f2c752",

          neutral: "#1F182B",

          "base-100": "#242642",

          info: "#289AE2",

          success: "#107048",

          warning: "#F6C309",

          error: "#E7657A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
