import React from 'react'
import Img from 'gatsby-image'
import { Container, StyledLink } from './styles'

export default function ProjectList({ projects }) {
  return (
    <Container>
      <div className='title'>Projects</div>
      <div className='projects'>
        <div style={{ marginBottom: '10px' }}>
          <span role='img' aria-label='construction'>
            🚧
          </span>{' '}
          Under Construction
        </div>
      </div>
      {projects.map((project, i) => {
        const {
          frontmatter: { title, description, thumbnail },
          fields: { slug }
        } = project.node
        return (
          <StyledLink key={title} to={slug}>
            <Img className='thumbnail' fixed={thumbnail.childImageSharp.fixed} />
            <div className='text'>
              <div className='title'>{title}</div>
              <div className='description'>{description}</div>
            </div>
          </StyledLink>
        )
      })}
    </Container>
  )
}
