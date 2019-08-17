import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { ProjectTitle } from './styles'
import { Markdown } from '../Post/styles'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
      }
    }
  }
`

function Project({ data, location }) {
  const {
    frontmatter: { title },
    html,
    timeToRead
  } = data.markdownRemark
  return (
    <Layout pathname={location.pathname}>
      <ProjectTitle>
        <div className='title'>{title}</div>
      </ProjectTitle>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Project
