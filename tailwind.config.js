/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px'
    },
    color: {
      brand: '#E0BEA2',
      white: '#fff',
      dark: '#252525',
      'bg-color': '#f9f9f9'
    },
    extend: {},
  },
  plugins: [],
}
