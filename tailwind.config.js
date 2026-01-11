/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './assets/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors:{
      primary:"#ff4f2e",
      darkPrimary:"#b76317",
      secondary:"#3782a3",
      darkSecondary:"#3782a3",
      text:"#b4a494",
      darkText:"#b4a494",
      background:"#f1f5f9",
      darkBackground:"#191d29",
      backgroundSecondary:"#e5e7eb",
      darkBackgroundSecondary:"#000",
      backgroundWeb:"#eff6ff",
      darkBackgroundWeb:"#000",
    }
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px'
    },
    
  },
  plugins: [],
};
