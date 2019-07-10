import React from 'react'
import { Container, StyledLink } from './styles'

export default function PostList({ posts }) {
  return (
    <Container>
      <div className='title'>Posts</div>
      <div className='posts'>
        {posts.map((post, i) => (
          <StyledLink key={post.node.frontmatter.title} to={post.node.fields.slug}>
            {post.node.frontmatter.title}
          </StyledLink>
        ))}
      </div>
    </Container>
  )
}
