/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        overviewTitleCardGradient:
          "linear-gradient(90deg, #FC6212 42.28%, rgba(234, 88, 12, 0) 100%), url(../public/images/titlecardoverview.png)",
      },
      backgroundSize: {
        hero: "50%",
      },
    },
  },
  plugins: [],
};
