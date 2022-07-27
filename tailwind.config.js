module.exports = {
  content: [
      "./src/**/*.{html,js}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontSize: {
        'xxl': '20rem',
        'mxl': '12rem'
      },
      spacing: {
        "10%": "10%",
        "25%": "25%",
        "50%": "50%",
        "75%": "75%",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'light-gray': '#cccccc',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'anthracite': '#191919',
        'dark': '#121212',
        'red1': '#950101'
      },
      fontFamily: {
        'graffiti': ['Graffiti']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}