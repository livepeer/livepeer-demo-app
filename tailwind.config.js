const colors = require("tailwindcss/colors");
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./**/*.html", "./**/*.tsx"],
  theme: {
    colors: {
      ...colors,
      livepeer: {
        DEFAULT: "#943CFF",
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
