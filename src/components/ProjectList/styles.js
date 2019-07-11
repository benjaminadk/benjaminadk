import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto;
  .title {
    font-size: 40px;
    margin-bottom: 10px;
  }
  .projects {
    display: flex;
    flex-direction: column;
  }
`
