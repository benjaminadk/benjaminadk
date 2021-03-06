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
  .posts {
    display: flex;
    flex-direction: column;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${p => p.theme.grey[10]};
  font-size: 18px;
  padding-bottom: 10px;
  &:hover {
    color: ${p => p.theme.textColor};
  }
  &:hover img {
    filter: none;
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
