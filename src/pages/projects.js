import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'

export default function Projects({ data }) {
  return (
    <Layout>
      <ProjectList projects={data.projects.edges} />
    </Layout>
  )
}

export const query = graphql`
  query ProjectsQuery {
    projects: allMarkdownRemark(filter: { fields: { slug: { regex: "/^/projects/" } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
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
