module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        contrast: 'var(--color-text-contrast)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
      }
    },
  },
  plugins: [],
}
