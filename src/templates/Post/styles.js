import styled from 'styled-components'

export const PostTitle = styled.div`
  width: ${p => p.theme.maxWidth};
  margin: 10px auto 0;
  .title {
    font-size: 40px;
    color: ${p => p.theme.textColor};
  }
  .date {
    font-size: 18px;
    color: ${p => p.theme.grey[8]};
    margin-top: -10px;
  }
`

export const Markdown = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 40px auto 40px;
  p {
    font-family: ${p => p.theme.textFont};
    font-size: 18px;
  }
  a {
    color: ${p => p.theme.grey[8]};
    &:hover {
      color: ${p => p.theme.textColor};
    }
  }
  a.anchor svg {
    margin-top: -8px;
  }
  h1 {
    font-size: 40px;
    font-weight: 400;
  }
  h2 {
    font-size: 30px;
    font-weight: 400;
  }
  ul {
    list-style-type: circle;
  }
  li {
    font-family: ${p => p.theme.textFont};
    font-size: 18px;
  }
  blockquote {
    border-left: 4px solid ${p => p.theme.grey[5]};
    padding: 0 15px;
    color: ${p => p.theme.grey[5]};
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
    border: 1px solid ${p => p.theme.grey[2]};
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .filename {
    background: ${p => p.theme.filenameColor};
    padding: 10px 15px;
    font-size: 16px;
    color: white;
    font-family: ${p => p.theme.code.font};
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-bottom: -10px;
  }
  .gatsby-highlight {
    margin: 10px 0px;
    background: ${p => p.theme.highlightColor};
    overflow: auto;
  }
  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }
  code[class*='language-'],
  pre[class*='language-'] {
    color: ${p => p.theme.code.text};
    background: none;
    font-family: ${p => p.theme.code.font};
    font-size: 14px !important;
    font-feature-settings: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    margin-bottom: 0;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  pre[class*='language-'] {
    overflow: auto;
    padding: 1.3125rem;
    margin-top: 0;
  }
  pre[class*='language-']::-moz-selection {
    background: hsl(207, 4%, 16%);
  }
  pre[class*='language-']::selection {
    background: hsl(207, 4%, 16%);
  }
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }
  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }
  .token.attr-name {
    color: ${p => p.theme.code.attribute};
    font-style: italic;
  }
  .token.comment {
    color: ${p => p.theme.code.comment};
  }
  .token.string,
  .token.url {
    color: ${p => p.theme.code.string};
  }
  .token.variable {
    color: ${p => p.theme.code.variable};
  }
  .token.number {
    color: ${p => p.theme.code.number};
  }
  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: ${p => p.theme.code.function};
  }
  .token.parameter {
    color: ${p => p.theme.code.parameter};
  }
  .token.operator,
  .token.punctuation {
    color: ${p => p.theme.code.punctuation};
  }
  .token.selector,
  .token.doctype {
    color: ${p => p.theme.selector};
    font-style: 'italic';
  }
  .token.class-name {
    color: ${p => p.theme.code.class};
  }
  .token.tag,
  .token.keyword {
    color: ${p => p.theme.code.keyword};
  }
  .token.boolean {
    color: ${p => p.theme.code.boolean};
  }
  .token.property {
    color: ${p => p.theme.code.property};
  }
  .token.namespace {
    color: ${p => p.theme.namespace};
  }
  code[class*='language-text'] {
    border-radius: 2px;
    background: ${p => p.theme.code.inlineBg};
    color: ${p => p.theme.code.inlineColor};
    padding: 2px 4px;
    white-space: normal;
  }
`
