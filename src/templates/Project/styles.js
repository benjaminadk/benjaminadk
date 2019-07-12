import styled from 'styled-components'

export const ProjectTitle = styled.div`
  width: ${p => p.theme.maxWidth};
  margin: 10px auto 0;
  .title {
    font-size: 40px;
    color: ${p => p.theme.textColor};
  }
  .sub-title {
    display: flex;
    align-items: center;
    color: ${p => p.theme.grey[8]};
    margin-top: -10px;
  }
`
