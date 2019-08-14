import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto;
  .title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .visualizations {
    display: flex;
    flex-direction: column;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${p => p.theme.grey[10]};
  font-size: 18px;
  padding-bottom: 0.5rem;
  &:hover {
    color: ${p => p.theme.textColor};
  }
`
