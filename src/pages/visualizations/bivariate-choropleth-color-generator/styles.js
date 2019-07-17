import styled from 'styled-components'

export const Controls = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 20px auto 5px;
`

export const Input = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .label {
    font-size: 18px;
    margin-right: 10px;
  }
  .value {
    font-size: 14px;
    margin-left: 10px;
  }
  select {
    padding: 4px;
    outline: 0;
    background: #eee;
  }
`

export const Palettes = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`

export const Strings = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto 20px;
  h3 {
    margin: 0;
  }
  button {
    padding: 2px 4px;
    font-size: 14px;
    margin-left: 20px;
  }
  textarea {
    padding: 10px;
    margin-right: 20px;
    font-size: 16px;
    outline: 0;
  }
  .color-strings {
    display: flex;
    align-items: center;
  }
`
