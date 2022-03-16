const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_flexsearch: false,
  unstable_staticImage: true,
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'pt', 'es'],
    defaultLocale: 'en',
  },
})
