import React from 'react'
import { Container, StyledLink } from './styles'

export default function VisualizationList({ visualizations }) {
  return (
    <Container>
      <div className='title'>Visualizations</div>
      <div className='visualizations'>
        <div>
          <span role='img' aria-label='construction'>
            🚧
          </span>{' '}
          Under Construction
        </div>
        {visualizations.map(vis => (
          <StyledLink key={vis.title} to={`/visualizations/${vis.slug}`}>
            {vis.title}
          </StyledLink>
        ))}
      </div>
    </Container>
  )
}
