import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  header {
    max-width: ${p => p.theme.maxWidth};
    height: ${p => p.theme.headerHeight};
    display: grid;
    align-items: center;
    margin: 0 auto;
    border-bottom: 4px solid ${p => p.theme.textColor};
  }
  .nav {
    height: ${p => p.theme.navHeight};
    max-width: ${p => p.theme.maxWidth};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
  }
`

export const TitleLink = styled(Link)`
  font-size: 50px;
  font-weight: 600;
  text-decoration: none;
  color: ${p => p.theme.textColor};
  padding-left: 10px;
`

export const StyledLink = styled(Link)`
  color: ${p => p.theme.grey[8]};
  text-decoration: none;
  font-size: 20px;
  padding-right: 20px;
  &:hover {
    color: ${p => p.theme.textColor};
  }
`
