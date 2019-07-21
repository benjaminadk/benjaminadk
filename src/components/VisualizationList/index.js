import React from 'react'
import { Container, StyledLink } from './styles'

export default function VisualizationList({ visualizations }) {
  return (
    <Container>
      <div className='title'>Visualizations</div>
      <div className='visualizations'>
        {visualizations.map(vis => (
          <StyledLink key={vis.title} to={`/visualizations/${vis.slug}`}>
            {vis.title}
          </StyledLink>
        ))}
      </div>
    </Container>
  )
}
