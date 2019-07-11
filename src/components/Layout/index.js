import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles/GlobalStyle'
import SEO from '../seo'
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

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <>
          <SEO />
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <StyledPage>
              <Header data={data} />
              <Main>{children}</Main>
              <Footer data={data} />
            </StyledPage>
          </ThemeProvider>
        </>
      )}
    />
  )
}
