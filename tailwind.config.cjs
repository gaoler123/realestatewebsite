/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        merriweather: "'Merriweather', serif",
        cuprum: "'Cuprum', sans-serif",
        arimo: "'Arimo', sans-serif",
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'pastelred': "#ff6961",
        'pastelred-dark': '#d30b00',
        'pastelblue-light': '#CCCCFF',
        'pastelblue-dark': '#B1B2FF'
      }
    },
  },
  plugins: [],
}
