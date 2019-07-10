import React from 'react'
import { Container } from './styles'

export default function Footer({ data }) {
  return (
    <Container>
      <div className='content'>
        <div>{data.site.siteMetadata.author}</div>
        <div>{data.site.siteMetadata.social.email}</div>
      </div>
    </Container>
  )
}
