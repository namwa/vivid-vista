/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./layouts/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Gilda Displa', 'serif' ],
        'body': [ 'Roboto', 'sans-serif' ]
      },
    },
  },
}
