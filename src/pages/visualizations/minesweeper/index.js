import React, { useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from '@benjaminadk/minesweeper'
import Layout from '../../../components/Layout'
import { PostTitle, Markdown } from '../../../templates/Post/styles'
import SEO from '../../../components/seo'
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

export default ({ data, location }) => {
  const {
    frontmatter: { title, description, date, image },
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
    <Layout>
      <SEO
        subtitle={title}
        description={description}
        image={image.childImageSharp.resize}
        pathname={location.pathname}
        isBlogPost={true}
        datePublished={date}
      />
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
  )
}

export const query = graphql`
  query MineQuery {
    allMarkdownRemark(filter: { fields: { slug: { regex: "/^/visualizations/minesweeper/" } } }) {
      edges {
        node {
          frontmatter {
            title
            description
            date
            image: featured {
              childImageSharp {
                resize(width: 1200) {
                  src
                  height
                  width
                }
              }
            }
          }
          html
        }
      }
    }
  }
`
