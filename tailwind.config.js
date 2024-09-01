/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section': "url('../Images/HeroSectionBG.png')", // Correct background image extension
      },
      clipPath: {
        circle: 'circle(50% at 50% 50%)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}