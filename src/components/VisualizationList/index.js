import React from 'react'
import { Container } from './styles'

export default function VisualizationList() {
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
      </div>
    </Container>
  )
}
