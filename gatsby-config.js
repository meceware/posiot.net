module.exports = {
  siteMetadata: {
    title: `Posiot - Next Generation Audio`,
    description: `Kick off your next, great project with us.`,
    siteUrl: 'https://www.posiot.net/',
    author: 'metincelik',
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${ __dirname }/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-no-sourcemaps',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Posiot - Next Generation Audio',
        short_name: 'posiot',
        start_url: '/',
        background_color: '#f2f2f2',
        theme_color: '#FF5722',
        display: 'minimal-ui',
        icon: 'src/images/posiot.png',
      },
    },
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.posiot.net/',
      },
    },
    {
      resolve: "gatsby-plugin-ackee-tracker",
      options: {
        domainId: '310735aa-a7be-48cf-8f93-07379522d7bb',
        server: 'https://analytics.wapy.dev',
        ignoreLocalhost: true,
        detailed: false,
      },
    },
    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        exclude: [
          '/dev-404-page',
          '/404',
          '/404.html',
          '/offline-plugin-app-shell-fallback',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require( 'tailwindcss' ),
          require( 'autoprefixer' ),
          require( 'cssnano' ),
        ],
      },
    },
  ],
}
