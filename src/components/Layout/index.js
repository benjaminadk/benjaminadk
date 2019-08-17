import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/GlobalStyle'
import Header from '../Header'
import Footer from '../Footer'
import { StyledPage, Main } from './styles'
import theme from '../../styles/theme'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        author
        lang
        social {
          email
          twitter
          youtube
          github
        }
        links {
          text
          href
        }
      }
    }
  }
`

function Layout({ pathname, children }) {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <StyledPage>
              <Header data={data} pathname={pathname} />
              <Main>{children}</Main>
              <Footer data={data} />
            </StyledPage>
          </ThemeProvider>
        </>
      )}
    />
  )
}

export default Layout
