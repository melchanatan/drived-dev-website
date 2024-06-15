/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': {
          DEFAULT: '#F6F2F2',
          darken: '#F1E4E4',
        },
        'primary': {
          DEFAULT: '#1D1E21',
          lighten: '#2C2D32',
        }
      },
      fontFamily: {
        'raster': 'Raster Grotesk',
        'tiny5': 'Tiny5'
      }
    }
  },
  plugins: [],
};
