import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import formatDate from '../../utils/formatDate'
import { formatReadingTime } from '../../utils/formatReadingTime'
import { PostTitle, Markdown } from '../Post/styles'
import SEO from '../../components/seo'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        description
        videoObject
        date
      }
    }
  }
`

const Project = ({ data, location }) => {
  const {
    frontmatter: { title, description, date, videoObject },
    html,
    timeToRead
  } = data.markdownRemark

  return (
    <Layout pathname={location.pathname}>
      <SEO
        subtitle={title}
        description={description}
        image={videoObject[4]}
        pathname={location.pathname}
        isBlogPost={true}
        datePublished={date}
        videoObject={videoObject}
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

export default Project
