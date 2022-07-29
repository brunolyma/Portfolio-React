/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    screens: {
      "mobile": '360px',
      'tablet': '600px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      'poppins': [ "Poppins", "sans-serif"]
    },
    colors: {
      'color-bg': '#1f1f38',
      'color-bg-variant': '#2c2c6c',
      'color-primary': '#4db5ff',
      'color-primary-variant': '#4db5ff66',
      'color-white': '#ffffff',
      'color-light': '#ffffff99',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: {
        'texture-bg': 'url(../assets/bg-texture.png)',
      },
      transitionTimingFunction: {
        "ease": "cubic-bexier(0.25, 0.1, 0.25, 1.0)"
      }
    },
  },
  plugins: [],
}
