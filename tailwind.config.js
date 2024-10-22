/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Gilda Displa', 'serif' ],
        'body': [ 'Roboto', 'sans-serif' ],
        'accent': ['Playwrite GB S', 'cursive']
      },
      colors: {
        'ice-blue': '#9EF3F4',
        'ultra-pink': '#FF59FF',
        'cherry-pink': '#FAB7C9',
        'icterine': '#FFF560',
        'risd-blue': '#035DFF',
        'tomato': '#FF6542'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
