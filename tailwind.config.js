/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
    './index.html',
  ],
  theme: {
    extend: {},
    height: {
      "screen/2": "50vh",
      "screen/3": "calc(100vh / 3)",
      "screen/4": "calc(100vh / 4)",
      "screen/5": "calc(100vh / 5)",
    }
  },
  plugins: [],
}