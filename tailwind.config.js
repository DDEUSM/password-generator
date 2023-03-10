/** @type {import('tailwindcss').Config} */
module.exports = {
  selected : 'class',
  darkMode : 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white' : '#fff',
      'black' : '#000',
      'purple' : '#666CBD',
      'azul' : '#131423',
      'darkblue' : '#0D0E18',
      'purple2' : '#3F437C',
      'purple3' : '#dcd6ff',
      'grey' : '#5E5F70',
      'red' : 'rgb(220, 38, 38)',
      'orange': '#ff8c00',
      'blue': '#0086fc',
      'green': '#008000',
    },
    extend: {      
    },
    fontFamily : {
      Raleway : ['Raleway',],
      Poppins : ['Poppins'],
    },
  },
  plugins: [],
}
