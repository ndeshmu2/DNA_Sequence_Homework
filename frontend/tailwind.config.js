/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    './index.html',
    './public/**/*.html',     
    './src/**/*.{js,jsx,ts,tsx,vue}', 
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

