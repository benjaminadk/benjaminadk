import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import ProjectList from '../components/ProjectList'

export const query = graphql`
  query ProjectsQuery {
    projects: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^/projects/" } } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            videoObject
            date
            thumbnail {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

function Projects({ data, location }) {
  const itemListElement = data.projects.edges.map((edge, i) => {
    const {
      frontmatter: { title, description, videoObject, date },
      fields: { slug }
    } = edge.node

    const baseUrl = 'https://benjaminbrooke.me'

    return {
      '@type': 'ListItem',
      '@context': 'http://schema.org',
      position: i + 1,
      item: {
        '@type': 'BlogPosting',
        url: `${baseUrl}${slug}`,
        name: title,
        alternateName: 'Benjamin Brooke | Projects',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: videoObject[4]
        },
        description,
        author: {
          '@type': 'Person',
          name: 'Benjamin Brooke'
        },
        publisher: {
          '@type': 'Organization',
          url: baseUrl,
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/icons/icon-512x512.png`,
            width: '512',
            height: '512'
          },
          name: 'Benjamin Brooke'
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': baseUrl
        },
        datePublished: date,
        dateModified: date
      }
    }
  })

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement
  }

  return (
    <Layout pathname={location.pathname}>
      <SEO
        subtitle='Projects'
        description='A list of software development projects. Summaries include decriptions, images, video, code samples and programmer methodology.'
        image={null}
        pathname={location.pathname}
        isBlogPost={false}
        datePublished='2019-08-21'
        videoObject={null}
        itemList={itemList}
      />
      <ProjectList projects={data.projects.edges} />
    </Layout>
  )
}

export default Projects
