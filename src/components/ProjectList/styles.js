import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto;
  .title {
    font-size: 40px;
    margin-bottom: 10px;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${p => p.theme.grey[8]};
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
  &:hover {
    color: ${p => p.theme.textColor};
  }
  &:hover img {
    filter: none;
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
  .description {
    font-size: 14px;
  }
  .thumbnail {
    width: 30px !important;
    height: 30px !important;
    margin-right: 10px !important;
  }
  img {
    filter: grayscale();
  }
`
