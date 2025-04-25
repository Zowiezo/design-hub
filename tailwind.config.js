const { heroui } = require('@heroui/theme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/components/(autocomplete|card|form|input|navbar|popover|scroll-shadow|skeleton|spacer|button|ripple|spinner|listbox|divider).js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
}
