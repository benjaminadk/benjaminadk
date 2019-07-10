const grey = [
  '#FAFAFA',
  '#F0F0F0',
  '#E0E0E0',
  '#CFCFCF',
  '#BFBFBF',
  '#B0B0B0',
  '#A1A1A1',
  '#8F8F8F',
  '#808080',
  '#707070',
  '#616161',
  '#4D4D4D',
  '#3D3D3D',
  '#2E2E2E'
]

const code = {
  font: 'Roboto Mono',
  text: '#e06c75',
  string: '#98c379',
  number: '#EEBA3F',
  boolean: '#EEBA3F',
  attribute: '#EEBA3F',
  property: '#e0e0e0',
  function: '#6BAEE6',
  parameter: '#b0b0b0',
  punctuation: '#cfcfcf',
  keyword: ' #c678dd',
  class: '#FFCA8A',
  comment: '#8f8f8f',
  variable: '#e0e0e0',
  selector: '#c678dd',
  namespace: '#FFCA8A',
  inlineBg: grey[2],
  inlineColor: grey[10]
}

export default {
  maxWidth: '800px',
  headerHeight: '100px',
  navHeight: '50px',
  footerHeight: '100px',
  textFont: `Georgia, 'Times New Roman', Times, serif`,
  textColor: grey[12],
  backgroundColor: grey[0],
  filenameColor: '#111111',
  highlightColor: '#252b31',
  grey,
  code
}
