module.exports = {
  siteMetadata: {
    title: `Benjamin Brooke`,
    description: `A JavaScript Developer's blog`,
    author: `Benjamin Brooke`,
    lang: 'en',
    social: {
      email: `benjaminadk@gmail.com`,
      twitter: `https://twitter.com/BenjaminBrooke3`,
      youtube: `https://www.youtube.com/channel/UCZ86uFH5o_5yjjBEbi2oFSw`,
      github: `https://github.com/benjaminadk`
    },
    links: [
      { text: 'Posts', href: '/' },
      { text: 'Projects', href: '/projects' },
      { text: 'Visualizations', href: '/visualizations' },
      { text: 'About', href: '/about' }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Benjamin Brooke`,
        short_name: `Benjamin Brooke`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `static/logo-512x512.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg width="30" height="30" viewBox="0 0 30 30"><path d="M26.34 17.603l-1.145 3.44-6.564.019-2.141 6.379h-3.441l2.138-6.37-5.263.014-2.108 6.283H4.375l2.104-6.274-6.244.016 1.145-3.44 6.255-.017 1.867-5.562-5.917.015 1.146-3.441 5.926-.016 2.086-6.217h3.442l-2.084 6.209 5.263-.014 2.055-6.123h3.441l-2.052 6.112L29.69 8.6l-1.146 3.439-6.892.018-1.866 5.563zm-13.394-5.522l-1.867 5.564 5.264-.015 1.866-5.564z" fill="#cdcdcd"/></svg>`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank'
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              showLineNumbers: false
            }
          }
        ]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
