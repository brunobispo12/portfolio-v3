module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        bar: 'var(--color-bg-bar)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        titleprimary: 'var(--color-title-primary)',
        titlecontrast: 'var(--color-title-contrast)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
      },
      colors: {
        primary: 'var(--color-shadow-primary)',
      },
      gridTemplateColumns: {
        about: 'repeat(2, minmax(0, 40rem))',
        aboutMobile: 'repeat(1, minmax(0, 20rem))'
      }
    },
  },
  plugins: [],
}
