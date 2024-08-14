/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html' , './javascript/*.js'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors:{
        'Green-200': 'hsl(148, 38%, 91%)', 
        'Green-600': 'hsl(169, 82%, 27%)',
        'Red': 'hsl(0, 66%, 54%)',
        'White': 'hsl(0, 0%, 100%)',
        'Gray-500': 'hsl(186, 15%, 59%)' ,
        'Gray-900': 'hsl(187, 24%, 22%)' ,
      },
      fontFamily: {
        Karla: ['Karla' , 'sans-serif'],
      },
    },
  },
  plugins: [],
}

