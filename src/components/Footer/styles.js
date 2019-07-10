import styled from 'styled-components'

export const Container = styled.footer`
  max-width: ${p => p.theme.maxWidth};
  height: ${p => p.theme.footerHeight};
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  .content {
    display: flex;
    flex-direction: column;
  }
`
