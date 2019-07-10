import React from 'react'
import { graphql } from 'gatsby'
import formatDate from '../../utils/formatDate'
import Layout from '../../components/Layout'
import { PostTitle, Markdown } from './styles'

export default function Post({ data }) {
  return (
    <Layout>
      <PostTitle>
        <div className='title'>{data.markdownRemark.frontmatter.title}</div>
        <div className='date'>{formatDate(data.markdownRemark.frontmatter.date)}</div>
      </PostTitle>
      <Markdown dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
      }
    }
  }
`
