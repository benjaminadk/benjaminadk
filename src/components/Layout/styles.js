import styled from 'styled-components'

export const StyledPage = styled.div`
  min-height: 100vh;
  color: ${p => p.theme.textColor};
  background: ${p => p.theme.backgroundColor};
`

export const Main = styled.main`
  min-height: ${p =>
    `calc(100vh - ${p.theme.headerHeight} - ${p.theme.footerHeight} - ${p.theme.navHeight})`};
`
