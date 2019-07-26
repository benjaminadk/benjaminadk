import React from 'react'
import { Container } from './styles'

export default function Footer({ data }) {
  const {
    author,
    social: { email, twitter, github }
  } = data.site.siteMetadata
  return (
    <Container>
      <div className='content'>
        <div>{author}</div>
        <a href={twitter} target='_blank' rel='noopener noreferrer'>
          @bendoyendo
        </a>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          github.com/benjaminadk
        </a>
        <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
          {email}
        </a>
      </div>
    </Container>
  )
}
