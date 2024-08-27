/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        primary: "#fd3d57",
      },
      width:{
        '500' : "500px",
        '600' : "600px",
        '850' : "850px",
      },
      height:{
        '400': "400px",
      },
      fontSize:{
        '17':"17px"
      },
    },
  },
  plugins: [],
};
