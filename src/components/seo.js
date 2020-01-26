import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const getSchemaOrgJSONLD = ({
  isBlogPost,
  url,
  title,
  image,
  description,
  datePublished
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: 'Benjamin Brooke'
    }
  ]

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image
              }
            }
          ]
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: 'Benjamin Brooke',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image
          },
          description,
          author: {
            '@type': 'Person',
            name: 'Benjamin Brooke'
          },
          publisher: {
            '@type': 'Organization',
            url: 'https://benjaminadk.netlify.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://benjaminadk.netlify.com/icons/icon-512x512.png',
              width: '512',
              height: '512'
            },
            name: 'Benjamin Brooke'
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': 'https://benjaminadk.netlify.com'
          },
          datePublished,
          dateModified: datePublished
        }
      ]
    : schemaOrgJSONLD
}

function SEO({
  title,
  subtitle,
  description,
  meta,
  image: metaImage,
  pathname,
  isBlogPost,
  datePublished
}) {
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
        const metaTitle = `${title} | ${subtitle}`
        const metaDescription =
          description || data.site.siteMetadata.description
        const image =
          metaImage && metaImage.src
            ? `${data.site.siteMetadata.siteUrl}${metaImage.src}`
            : null
        const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`

        const schemaOrgJSONLD = getSchemaOrgJSONLD({
          isBlogPost,
          url: metaUrl,
          title: metaTitle,
          image,
          description: metaDescription,
          datePublished
        })

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
                content: metaTitle
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
                content: metaTitle
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
                        content: metaTitle
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
          >
            <script type='application/ld+json'>
              {JSON.stringify(schemaOrgJSONLD)}
            </script>
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  title: 'Benjamin Brooke',
  subtitle: 'Home',
  description:
    'A software development portfolio and blog. Post, projects and visualizations are built with JavaScript, React, Node, D3, GraphQL, Electron, PHP, WordPress, to name just a few. ',
  meta: []
}

export default SEO
