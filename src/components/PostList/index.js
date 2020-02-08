import React from 'react'
import Img from 'gatsby-image'
import SEO from '../seo'
import { Container, StyledLink } from './styles'

export default function PostList({ posts }) {
  return (
    <Container>
      <SEO subtitle='Home' pathname='/' isBlogPost={false} />
      <div className='title'>Posts</div>
      <div className='posts'>
        {posts.map((post, i) => {
          const {
            frontmatter: { title, thumbnail },
            fields: { slug }
          } = post.node
          return (
            <StyledLink key={title} to={slug}>
              <Img
                className='thumbnail'
                fixed={thumbnail.childImageSharp.fixed}
              />
              <span>{title}</span>
            </StyledLink>
          )
        })}
      </div>
    </Container>
  )
}
