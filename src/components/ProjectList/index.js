import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto;
  .title {
    font-size: 40px;
    margin-bottom: 10px;
  }
  .projects {
    display: flex;
    flex-direction: column;
  }
`

export default function ProjectList({ projects }) {
  return (
    <Container>
      <div className='title'>Projects</div>
      <div className='projects'>
        {projects.map(project => (
          <div key={project.name}>
            <div>{project.name}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}
