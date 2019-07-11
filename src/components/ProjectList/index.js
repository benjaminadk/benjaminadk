import React from 'react'
import { Container } from './styles'

export default function ProjectList({ projects }) {
  return (
    <Container>
      <div className='title'>Projects</div>
      <div className='projects'>
        <div>
          <span role='img' aria-label='construction'>
            🚧
          </span>{' '}
          Under Construction
        </div>
        {projects.map(project => (
          <div key={project.name}>
            <div>{project.name}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
