import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto;
  .title {
    font-size: 40px;
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
  color: ${p => p.theme.grey[8]};
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  &:hover {
    color: ${p => p.theme.textColor};
  }
  .text {
    display: flex;
    align-items: center;
  }
  .title {
    font-size: 20px;
    text-decoration: underline;
    margin-right: 10px;
    margin-bottom: 0;
  }
`
