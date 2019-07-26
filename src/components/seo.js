import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

function SEO({ title, subtitle, description, meta, image: metaImage, pathname }) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              author
              description
              siteUrl
              keywords
              social {
                twitterHandle
              }
            }
          }
        }
      `}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        const image =
          metaImage && metaImage.src ? `${data.site.siteMetadata.siteUrl}${metaImage.src}` : null
        const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`
        return (
          <Helmet
            htmlAttributes={{
              lang: 'en'
            }}
            title={title}
            titleTemplate={`%s | ${subtitle}`}
            meta={[
              {
                name: `description`,
                content: metaDescription
              },
              {
                name: `keywords`,
                content: data.site.siteMetadata.keywords.join(',')
              },
              {
                property: `og:type`,
                content: 'website'
              },
              {
                property: `og:url`,
                content: metaUrl
              },
              {
                property: `og:title`,
                content: title
              },
              {
                property: `og:description`,
                content: metaDescription
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.twitterHandle
              },
              {
                name: `twitter:title`,
                content: title
              },
              {
                name: `twitter:description`,
                content: metaDescription
              }
            ]
              .concat(
                metaImage
                  ? [
                      {
                        property: `og:image`,
                        content: image
                      },
                      {
                        property: `og:image:alt`,
                        content: title
                      },
                      {
                        property: `og:image:width`,
                        content: metaImage.width
                      },
                      {
                        property: `og:image:height`,
                        content: metaImage.height
                      },
                      {
                        name: `twitter:card`,
                        content: `summary_large_image`
                      }
                    ]
                  : [
                      {
                        name: `twitter:card`,
                        content: `summary`
                      }
                    ]
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  title: 'Benjamin Brooke',
  subtitle: 'Home',
  description: 'Post, Projects & Visualizations',
  meta: []
}

export default SEO
