import React, { useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from '@benjaminadk/minesweeper'
import Helmet from 'react-helmet'
import Layout from '../../../components/Layout'
import { PostTitle, Markdown } from '../../../templates/Post/styles'
import formatDate from '../../../utils/formatDate'
import styled from 'styled-components'

export const Level = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 20px auto 5px;
`

export const Game = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`

export default ({ data }) => {
  const {
    frontmatter: { title, date },
    html
  } = data.allMarkdownRemark.edges[0].node

  const level = useRef(null)
  const minesweeper = useRef(null)
  const pattern = useRef(null)
  const style = useRef(null)

  useEffect(() => {
    const runtime = new Runtime()
    runtime.module(notebook, name => {
      if (name === 'viewof level') {
        return new Inspector(level.current)
      }
      if (name === 'minesweeper') {
        return new Inspector(minesweeper.current)
      }
      if (name === 'style') {
        return new Inspector(style.current)
      }
      if (name === 'pattern') {
        return new Inspector(pattern.current)
      }
    })
  }, [])

  return (
    <>
      <Helmet />
      <Layout>
        <PostTitle>
          <div className='title'>{title}</div>
          <div className='sub-title'>{formatDate(date)}</div>
        </PostTitle>
        <Level ref={level} />
        <Game>
          <div ref={minesweeper} />
        </Game>
        <Markdown dangerouslySetInnerHTML={{ __html: html }} />
        <div ref={pattern} />
        <div ref={style} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query MineQuery {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/^/visualizations/minesweeper/" } } }) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`
