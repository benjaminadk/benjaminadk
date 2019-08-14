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
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${p => p.theme.grey[10]};
  padding-bottom: 10px;
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
    font-size: 18px;
    font-weight: 400;
    text-decoration: underline;
    margin-right: 10px;
    margin-bottom: 0;
  }
  .description {
    font-size: 12px;
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
