/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FD9255",
        secondary: "#06170B",
        gray: {
          350: "#F9F9F9",
          450: "#E2E2E2",
          550: "#666666",
          850: "#222222",
        },
      },
      width: {
        61: "15.2rem",
      },
      height: {
        61: "15.2rem",
      },
      flexBasis: {
        14.5: "14.5%",
        71: "71%",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
