import React from 'react'
import { graphql } from 'gatsby'
import formatDate from '../../utils/formatDate'
import formatTtr from '../../utils/formatTtr'
import Layout from '../../components/Layout'
import { PostTitle, Markdown } from './styles'

export default function Post({ data }) {
  const {
    frontmatter: { title, date },
    html,
    timeToRead
  } = data.markdownRemark
  return (
    <Layout>
      <PostTitle>
        <div className='title'>{title}</div>
        <div className='sub-title'>
          <div className='date'>{formatDate(date)}</div>
          <span>&bull;</span>
          <div className='ttr'>{formatTtr(timeToRead)}</div>
        </div>
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
