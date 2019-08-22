import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
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
  return (
    <Layout pathname={location.pathname}>
      <ProjectList projects={data.projects.edges} />
    </Layout>
  )
}

export default Projects
