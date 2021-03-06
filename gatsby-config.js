module.exports = {
  siteMetadata: {
    title: `Benjamin Brooke`,
    description: `A software development portfolio and blog. Post, projects and visualizations are built with JavaScript, React, Node, D3, GraphQL, Electron, PHP, WordPress, to name just a few. `,
    author: `Benjamin Brooke`,
    siteUrl: `http://benjaminbrooke.me`,
    lang: 'en',
    keywords: [
      'javascript',
      'react',
      'visualization',
      'd3',
      'tutorial',
      'benjamin',
      'brooke',
      'programming',
      'coding',
      'software',
      'blog',
      'tutorial',
      'wordpress'
    ],
    social: {
      email: `ben@brokeveganguy.com`,
      twitter: `https://twitter.com/BenjaminBrooke3`,
      twitterHandle: '@bendoyendo',
      youtube: `https://www.youtube.com/channel/UCZ86uFH5o_5yjjBEbi2oFSw`,
      github: `https://github.com/benjaminadk`,
      linkedin: `https://www.linkedin.com/in/benjamin-brooke-957b2310a`
    },
    links: [
      { text: 'Posts', href: '/' },
      { text: 'Projects', href: '/projects' },
      { text: 'Visualizations', href: '/visualizations' },
      { text: 'About', href: '/about' }
    ]
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
          `gatsby-plugin-netlify`,
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
              showLineNumbers: false
              // prompt: {
              //   user: 'Benjamin',
              //   host: 'WIN',
              //   global: true
              // }
            }
          }
        ]
      }
    },
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-143670697-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Percentage of users tracked
        sampleRate: 100,
        // Percentage of user to track site speed with
        siteSpeedSampleRate: 10
      }
    }
  ]
}
