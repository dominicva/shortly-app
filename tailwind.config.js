/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        'raisin-black': '#34313D',
        'space-cadet': '#3A3054',
        grape: '#4B3F6B',
        manatee: '#9E9AA8',
        'ghost-white': '#EFF1F7',
        'dark-turqoise': '#2BD0D0',
      },
      backgroundImage: {
        hero: "url('../assets/images/illustration-working.svg')",
      },
    },
  },
  plugins: [],
};
