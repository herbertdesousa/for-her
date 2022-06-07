module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': 'var(--blue)',
      'green': 'var(--green)',
      'red': 'var(--red)',

      'accent-0': 'var(--accent-0)',
      'accent-1': 'var(--accent-1)',
      'accent-2': 'var(--accent-2)',
      'accent-3': 'var(--accent-3)',
      'accent-4': 'var(--accent-4)',
      'accent-5': 'var(--accent-5)',
      'accent-6': 'var(--accent-6)',

      'transparent': 'rgba(255, 255, 255, 0)',
    },
    fontFamily: {
      merriweather: ['var(--font-merriweather)'],
      inter: ['var(--font-inter)']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
