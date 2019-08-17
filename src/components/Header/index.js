import React from 'react'
import { HeaderWrapper, Navigation, TitleLink, StyledLink } from './styles'

function getLinkName(pathname) {
  if (pathname === '/' || pathname.startsWith('/posts')) return 'Posts'
  if (pathname.startsWith('/projects')) return 'Projects'
  if (pathname.startsWith('/visualizations')) return 'Visualizations'
  return 'About'
}

function Header(props) {
  const { title, links } = props.data.site.siteMetadata
  console.log(props.pathname)
  return (
    <HeaderWrapper>
      <header>
        <TitleLink to='/'>{title}</TitleLink>
      </header>
      <Navigation>
        {links.map((link, i) => (
          <StyledLink
            key={link.text}
            to={link.href}
            active={link.text === getLinkName(props.pathname) ? 1 : 0}
          >
            {link.text}
          </StyledLink>
        ))}
      </Navigation>
    </HeaderWrapper>
  )
}

export default Header
