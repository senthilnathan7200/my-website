/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        ink: '#132033',
        ember: '#ff5a3c',
        coral: '#ff8b63',
        mist: '#e7eef6',
      },
    },
  },
  plugins: [],
}
