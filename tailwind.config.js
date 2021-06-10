module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Manrope', 'sans-serif'],
      'body': ['Roboto', 'sans-serif']
    },
    extend: {
      translate: {
        double: "200%",
        triple: "300%",
        quad: "400%"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
