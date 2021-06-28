module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        highlight: "#1ebbc2",
        background: "#3c5454",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
