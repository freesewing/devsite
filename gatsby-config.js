require('dotenv').config()
const searchData = require('./src/algolia')
const jargon = require('@freesewing/i18n').jargon.en


const plugins = [
  `gatsby-plugin-sass`,
  // Automatically restores your cache and caches new files within the Netlify cache folder.
  //   To reset the cache, hit the Clear build cache checkbox in the Netlify app.
  'gatsby-plugin-netlify-cache',
  {
    resolve: 'gatsby-plugin-nprogress',
    options: {
      color: '#74c0fc'
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/markdown/dev`,
      name: 'markdown',
      ignore: [
        '**/nl.md',
        '**/es.md',
        '**/fr.md',
        '**/de.md',
      ]
    }
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.mdx', '.md'],
      // Plugins workaround. See: https://github.com/gatsbyjs/gatsby/issues/15486
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 800,
            showCaptions: ['title', 'alt'],
            markdownCaptions: true
          }
        }
      ],
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 800,
          }
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
            inlineCodeMarker: null,
            aliases: {}
          }
        },
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-autolink-headers',
        'gatsby-remark-smartypants',
        {
          resolve: 'gatsby-remark-jargon',
          options: { jargon }
        }
      ]
    }
  },
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
  'gatsby-plugin-styled-components',
  'gatsby-plugin-catch-links',
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `FreeSewing`,
      short_name: `FreeSewing`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#212529`,
      display: `standalone`,
      icon: `src/images/logo.svg`
    }
  },
  'gatsby-plugin-offline',
  'gatsby-plugin-netlify'
]

// Only update the Algolia indices when having the ALGOLIA_UPDATE_KEY set.
//   Most likely on deployment to production only
//if (process.env.CONTEXT === 'production' && process.env.HEAD === 'master') {
//  plugins.push({
//    resolve: 'gatsby-plugin-algolia',
//    options: {
//      appId: process.env.GATSBY_ALGOLIA_API_ID,
//      apiKey: process.env.GATSBY_ALGOLIA_UPDATE_KEY,
//      queries: searchData('en'),
//      chunkSize: 10000
//    }
//  })
//}

module.exports = { plugins: plugins }
