import React from 'react'
import { Container, TitleLink, StyledLink } from './styles'

export default function Header({ data }) {
  return (
    <Container>
      <header>
        <TitleLink to='/'>{data.site.siteMetadata.author}</TitleLink>
      </header>
      <div className='nav'>
        {data.site.siteMetadata.links.map((link, i) => (
          <StyledLink key={link.text} to={link.href}>
            {link.text}
          </StyledLink>
        ))}
      </div>
    </Container>
  )
}
