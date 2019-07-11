import React from 'react'
import { graphql } from 'gatsby'
import formatDate from '../../utils/formatDate'
import Layout from '../../components/Layout'
import { PostTitle, Markdown } from './styles'

export default function Post({ data }) {
  const {
    frontmatter: { title, date },
    html
  } = data.markdownRemark
  return (
    <Layout>
      <PostTitle>
        <div className='title'>{title}</div>
        <div className='date'>{formatDate(date)}</div>
      </PostTitle>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
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
