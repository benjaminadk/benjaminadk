import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { ProjectTitle } from './styles'
import { Markdown } from '../Post/styles'

export default function Project({ data }) {
  const {
    frontmatter: { title },
    html
  } = data.markdownRemark
  return (
    <Layout>
      <ProjectTitle>
        <div className='title'>{title}</div>
      </ProjectTitle>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
