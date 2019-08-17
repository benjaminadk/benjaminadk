import React from 'react'
import { graphql } from 'gatsby'
import formatDate from '../../utils/formatDate'
import { formatReadingTime } from '../../utils/formatReadingTime'
import Layout from '../../components/Layout'
import { PostTitle, Markdown } from './styles'
import SEO from '../../components/seo'

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

const Post = ({ data, location }) => {
  const {
    frontmatter: { title, date, image },
    html,
    excerpt,
    timeToRead
  } = data.markdownRemark
  return (
    <Layout pathname={location.pathname}>
      <SEO
        subtitle={title}
        description={excerpt}
        image={image.childImageSharp.resize}
        pathname={location.pathname}
        isBlogPost={true}
        datePublished={date}
      />
      <PostTitle>
        <div className='title'>{title}</div>
        <div className='sub-title'>
          <div className='date'>{formatDate(date)}</div>
          <span>&bull;</span>
          <div className='ttr'>{formatReadingTime(timeToRead)}</div>
        </div>
      </PostTitle>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Post
