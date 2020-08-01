import styled from 'styled-components'
import Media from '../../styles/Media'

export const PostTitle = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 10px auto 0;
  .title {
    font-size: 40px;
    font-weight: 600;
    color: ${p => p.theme.textColor};
    ${Media.phone`
      font-size: 30px;
      line-height: 1.2;
    `}
  }
  .sub-title {
    display: flex;
    align-items: center;
    color: ${p => p.theme.grey[8]};
    margin-top: -10px;
    ${Media.phone`
      margin-top: 0;
    `}
    .date {
      margin-right: 10px;
      font-size: 18px;
    }
    .ttr {
      margin-left: 10px;
      font-size: 16px;
    }
  }
`

export const Markdown = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 40px auto 40px;
  p {
    font-family: ${p => p.theme.textFont};
    font-size: 18px;
    text-align: justify;
  }
  a {
    color: ${p => p.theme.grey[8]};
    &:hover {
      color: ${p => p.theme.textColor};
    }
  }
  a.anchor {
    margin-left: -35px;
  }
  a.anchor svg {
    margin-top: -8px;
  }
  h1 {
    font-size: 40px;
    font-weight: 600;
  }
  h2 {
    font-size: 30px;
    font-weight: 600;
  }
  h3 {
    font-size: 25px;
    font-weight: 600;
  }
  ul {
    list-style-type: circle;
  }
  li {
    font-family: ${p => p.theme.textFont};
    font-size: 18px;
  }
  blockquote {
    border-left: 4px solid ${p => p.theme.grey[10]};
    padding: 20px 15px;
    background-color: #fff;
    color: ${p => p.theme.grey[10]};
    box-shadow: ${p => p.theme.shadows[0]};
  }
  blockquote > :first-child {
    margin-top: 0;
  }
  blockquote > :last-child {
    margin-bottom: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1.2rem;
    margin: auto;
  }
  table th {
    border: 1px solid ${p => p.theme.grey[3]};
    padding: 6px 13px;
  }
  table td {
    border: 1px solid ${p => p.theme.grey[3]};
    padding: 6px 13px;
  }
  table tr {
    border-top: 1px solid ${p => p.theme.grey[3]};
    background-color: #fff;
  }
  table tr:nth-child(2n) {
    background-color: ${p => p.theme.grey[1]};
  }
  hr {
    border: 0;
    border-top: 1px solid ${p => p.theme.grey[2]};
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .filename {
    background: ${p => p.theme.grey[1]};
    padding: 10px 15px;
    font-size: 14px;
    color: ${p => p.theme.textColor};
    font-family: ${p => p.theme.codeFont};
    border: 1px solid #dddddd;
    border-bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-bottom: -10px;
  }
  .center {
    width: 100%;
    display: grid;
    justify-items: center;
  }
  .gatsby-highlight {
    margin: 10px 0px;
    background: ${p => p.theme.highlightColor};
    overflow: auto;
    padding: 0;
  }
  .gatsby-highlight pre[class*='language-'] {
    margin: 0;
    padding: 1em;
    overflow: initial;
    float: left;
    min-width: 100%;
  }
  .gatsby-highlight-code-line {
    background-color: #ffffe5;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 2px solid yellow;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: #393a34;
    font-family: ${p => p.theme.codeFont};
    font-size: 12px !important;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    font-size: 0.95em;
    line-height: 1.2em;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    background: #c1def1;
  }
  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    background: #c1def1;
  }
  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border: 1px solid #dddddd;
    background-color: white;
  }
  code[class*='language-text'] {
    border-radius: 2px;
    color: ${p => p.theme.textColor};
    padding: 0.5px 4px;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #008000;
    font-style: italic;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.string {
    color: #a31515;
  }
  .token.punctuation,
  .token.operator {
    color: #393a34; /* no highlight */
  }
  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.inserted {
    color: #36acaa;
  }
  .token.atrule,
  .token.keyword,
  .token.attr-value,
  .language-autohotkey .token.selector,
  .language-json .token.boolean,
  .language-json .token.number,
  code[class*='language-css'] {
    color: #3232cd;
  }
  .token.function {
    color: #393a34;
  }
  .token.deleted,
  .language-autohotkey .token.tag {
    color: #9a050f;
  }
  .token.selector,
  .language-autohotkey .token.keyword {
    color: #00009f;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.class-name,
  .language-json .token.property {
    color: #2b91af;
  }
  .token.tag,
  .token.selector {
    color: #800000;
  }
  .token.attr-name,
  .token.property,
  .token.regex,
  .token.entity {
    color: #d62929;
  }
  .token.directive.tag .tag {
    background: #ffff00;
    color: #393a34;
  }
  .command-line-prompt {
    border-right: 1px solid #999;
    display: block;
    float: left;
    font-size: 100%;
    letter-spacing: -1px;
    margin-right: 1em;
    pointer-events: none;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .command-line-prompt > span:before {
    color: #999;
    content: ' ';
    display: block;
    padding-right: 0.8em;
  }
  .command-line-prompt > span[data-user]:before {
    content: '[ ' attr(data-user) '@' attr(data-host) ' ] $';
  }
  .command-line-prompt > span[data-user='root']:before {
    content: '[ ' attr(data-user) '@' attr(data-host) ' ] #';
  }
  .command-line-prompt > span[data-prompt]:before {
    content: attr(data-prompt);
  }
`
