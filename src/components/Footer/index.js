import React from 'react'
import { Container } from './styles'

export default function Footer({ data }) {
  const {
    author,
    social: { email, twitter }
  } = data.site.siteMetadata
  return (
    <Container>
      <div className='content'>
        <div>{author}</div>
        <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
          {email}
        </a>
        <a href={twitter} target='_blank' rel='noopener noreferrer'>
          @bendoyendo
        </a>
      </div>
    </Container>
  )
}
