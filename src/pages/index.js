import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostList from '../components/PostList'

export default function Homepage({ data }) {
  return (
    <Layout>
      <PostList posts={data.posts.edges} />
    </Layout>
  )
}

export const query = graphql`
  query PostsQuery {
    posts: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^/posts/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            spoiler
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
    categories: allMarkdownRemark {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
