/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          fontFamily: {
            'sans': ["assistant", "system-ui"]
          },
          fontWeight: 500,
        }
      }
    },
    fontFamily: {
      'sans': ["assistant", "system-ui"]
    },
    extend: {
      colors: {
        'viridian': '#62A783',
        'golden-yellow': '#F0B86C',
        'raisin-black': '#191919',
        'floral-white': '#f5f5f5'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
