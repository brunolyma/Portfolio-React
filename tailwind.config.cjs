/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.tsx"],
  theme: {
    screens: {
      mobile: "460px",
      tablet: "600px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      "color-bg": "#222",
      "color-bg-variant": "#9a0f0d8e",
      "color-primary": "#e3181f",
      "color-primary-variant": "#FF393E45",
      "card-respon": "#9A100D61",
      "color-white": "#ffffff",
      "color-light": "#ffffff99",
      transparent: "transparent",
    },
    extend: {
      boxShadow: {
        serv: "0 2rem 1rem rgba(0, 0, 0, 0.1)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        me: "repeat(2, minmax(35%, 50%))",

        // Complex site-specific column configuration
        ab: "repeat(1, minmax(3, 1fr)",
      },
      backgroundImage: {
        "texture-bg": "url(../assets/bg-texture.png)",
      },
      transitionTimingFunction: {
        ease: "cubic-bexier(0.25, 0.1, 0.25, 1.0)",
      },
    },
  },
  plugins: [],
};
