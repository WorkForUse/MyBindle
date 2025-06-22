/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}', // <== Add this if your components are outside /src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};