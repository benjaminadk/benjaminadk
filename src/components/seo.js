import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

const getSchemaOrgJSONLD = ({
  title,
  description,
  url,
  author,
  siteUrl,
  keywords,
  image,
  videoObject,
  isBlogPost,
  itemList,
  datePublished
}) => {
  const schemaWebsite = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: author
    }
  ]

  const schemaVideoObject = videoObject
    ? [
        {
          '@context': 'http://schema.org',
          '@type': 'VideoObject',
          name: videoObject[0],
          description: videoObject[1],
          contentUrl: videoObject[2],
          embedUrl: videoObject[3],
          thumbnailUrl: videoObject[4],
          uploadDate: datePublished
        }
      ]
    : []

  const schemaBlogPosting = isBlogPost
    ? [
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: author,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image
          },
          description,
          keywords,
          author: {
            '@type': 'Person',
            name: author
          },
          publisher: {
            '@type': 'Organization',
            url: siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/icons/icon-512x512.png`,
              width: '512',
              height: '512'
            },
            name: author
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': siteUrl
          },
          datePublished,
          dateModified: datePublished
        }
      ]
    : []

  const schemaItemList = [itemList] || []

  return [
    ...schemaWebsite,
    ...schemaBlogPosting,
    ...schemaVideoObject,
    ...schemaItemList
  ]
}

function SEO({
  title,
  subtitle,
  description,
  meta,
  image: metaImage,
  pathname,
  isBlogPost,
  videoObject,
  itemList,
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
        const { author, keywords, siteUrl } = data.site.siteMetadata

        const metaTitle = `${title} | ${subtitle}`

        const metaDescription =
          description || data.site.siteMetadata.description

        const image =
          metaImage && metaImage.src
            ? `${siteUrl}${metaImage.src}`
            : videoObject
            ? metaImage
            : null

        const metaUrl = `${siteUrl}${pathname}`

        const schemaOrgJSONLD = getSchemaOrgJSONLD({
          title: metaTitle,
          description: metaDescription,
          url: metaUrl,
          author,
          siteUrl,
          keywords,
          image,
          videoObject,
          isBlogPost,
          itemList,
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

// {
//   '@context': 'http://schema.org',
//   '@type': 'BreadcrumbList',
//   itemListElement: [
//     {
//       '@type': 'ListItem',
//       position: 1,
//       item: {
//         '@id': url,
//         name: title,
//         image
//       }
//     }
//   ]
// },
