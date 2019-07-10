import React from 'react'
import Img from 'gatsby-image'
import { Container, StyledLink } from './styles'

export default function PostList({ posts }) {
  return (
    <Container>
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
                style={{ width: '30px', height: '30px', marginRight: '10px' }}
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
