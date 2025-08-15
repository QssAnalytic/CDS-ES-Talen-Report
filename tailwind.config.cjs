/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5E4090",
        secondary: "#8466AC",
        alternative: "#85CEBA",
        interpersonal: "#22BBAD",
        chart: "#262262",
        text: "#1B1136",
        intermediate: "#FCEE1A",
        novice: "#FDBE1B",
        fundamentalAwarenes: "#F05765",
        rainbowTitle: "#231F20",
        footer: "#FFCC05",
        projects: "#FFC907",
      },
      borderColor: {
        footer: "#FFCC05",
      },
      fontSize: {
        title: "33px",
      },
      lineHeight: {
        title: "35px",
      },
      letterSpacing: {
        title: "0.33px",
      },
      spacing: {
        section: "28px",
        p: "18px",
      },
      fontFamily: {
        "Gotham-Thin": "Gotham-Thin",
        "Gotham-Light": "Gotham-Light",
        Gotham: "Gotham",
        "Gotham-Medium": "Gotham-Medium",
        "Gotham-Bold": "Gotham-Bold",
        "Helvetica-Light": "Helvetica-Light",
        Helvetica: "Helvetica",
        "Helvetica-Bold": "Helvetica-Bold",
        Montserrat: "Montserrat",
        "Helvetica-Light-Oblique": "Helvetica-Light-Oblique",
      },
    },
  },
  plugins: [],
};
