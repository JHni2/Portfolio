/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '426px',
      md: '768px',
      lg: '1370px',
    },
    colors: {
      transparent: 'transparent',
      white: 'white',
      orange: '#FFBF85',
      grey: '#F9F9F9',
      pointGrey: '#8b8b8b',
      navy: '#343C48',
      darkNavy: '#2B3038',
      pointGreen: '#2F4F4F',
      pointYellow: '#FAF8C8',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
