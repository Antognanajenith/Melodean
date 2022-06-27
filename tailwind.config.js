

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily:{
      'sans': ['helvetica'],
    },

    extend: {
      colors:{
        pinkish_violet :"#D535F8",
        bluer:"#0072F5",
        whitesmoker:"#F5F5F5",
        blacksmoke:"#101115",
        blackersmoke :"#060F15",
        darkorange:"#F36534",
        lightorange:"#F58D2B",
        black01:"#181818",
        black02:"#151515",
        eerieblack: "#1e2024ff",
        cultured: "#f8f9fcff",
        raisinblack:"#1f2125ff",
        lightengray: "#d5d4d2ff",
        eerieblack2: "#1c1d1fff",
      },
      dropShadow: {
        '6kl':'inset 0 0 0 200px rgba(255,255,255,0.2)',
      },     

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
