/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5b0017",
        secondary: "#CC9D2F",
        darkC: "#243054",
        Ps: "#FFFFFF",
      },
      fontSize: {
        mainT: "120px",
        STitle: "70px",
        T21: "21px",
        bText: "24px",
        
      }
    },
  },
  plugins: [],
};
