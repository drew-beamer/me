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
            'sans': ["poppins", "system-ui"]
          },
          fontWeight: 500,
        }
      }
    },
    fontFamily: {
      'sans': ["poppins", "system-ui"]
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
