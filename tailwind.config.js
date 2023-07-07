/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
],
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
      colors:{
        primary:'#5EEAD4',
        secondary:'#2DD4BF'
      },
      screens:{
        'xl':'1280px',
      },
    },
  },
  plugins: [],
}

