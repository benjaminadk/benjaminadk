import React from 'react'
import { Container } from './styles'

function Footer({ data }) {
  const {
    social: { email, twitter, github, linkedin }
  } = data.site.siteMetadata
  return (
    <Container>
      <div className='content'>
        <span>Contact</span>
        <a href={linkedin} target='_blank' rel='noopener noreferrer'>
          linkedin@benjamin-brooke
        </a>
        <a href={twitter} target='_blank' rel='noopener noreferrer'>
          twitter@bendoyendo
        </a>
        <a href={github} target='_blank' rel='noopener noreferrer'>
          github@benjaminadk
        </a>
        <a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>
          {email}
        </a>
      </div>
    </Container>
  )
}

export default Footer
