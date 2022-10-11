/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#09091B",

          secondary: "#161627",

          accent: "#F6D854",

          neutral: "#3F4DE4",

          "base-100": "#0B0A10",

          info: "#000000",

          success: "#107048",

          warning: "#F6C309",

          error: "#E7657A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
