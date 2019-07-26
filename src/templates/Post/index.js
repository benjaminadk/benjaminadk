import React from 'react'
import { graphql } from 'gatsby'
import formatDate from '../../utils/formatDate'
import formatTtr from '../../utils/formatTtr'
import Layout from '../../components/Layout'
import { PostTitle, Markdown } from './styles'
import SEO from '../../components/seo'

export default function Post({ data, location }) {
  const {
    frontmatter: { title, date, image },
    html,
    excerpt,
    timeToRead
  } = data.markdownRemark
  return (
    <Layout>
      <SEO
        subtitle={title}
        description={excerpt}
        image={image.childImageSharp.resize}
        pathname={location.pathname}
      />
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
      excerpt(pruneLength: 160)
      timeToRead
      frontmatter {
        title
        date
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`
