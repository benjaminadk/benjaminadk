import React, { useRef, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from '@benjaminadk/high-school-clock'
import Helmet from 'react-helmet'
import Layout from '../../../components/Layout'
import { PostTitle, Markdown } from '../../../templates/Post/styles'
import formatDate from '../../../utils/formatDate'
import styled from 'styled-components'

export const Controls = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 20px auto 5px;
`

export const Clock = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`

export default ({ data }) => {
  const {
    frontmatter: { title, date },
    html
  } = data.allMarkdownRemark.edges[0].node

  const [size, setSize] = useState(400)

  const clock = useRef(null)
  const sizeRef = useRef(null)

  useEffect(() => {
    const runtime = new Runtime()
    runtime.module(notebook, name => {
      if (name === 'clock') {
        return new Inspector(clock.current)
      }
      if (name === 'mutable size') {
        return {
          fulfilled: value => {
            sizeRef.current = value
          }
        }
      }
    })
  }, [])

  useEffect(() => {
    if (sizeRef.current) {
      sizeRef.current.value = size
    }
  }, [size])

  return (
    <>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css?family=Michroma&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <Layout>
        <PostTitle>
          <div className='title'>{title}</div>
          <div className='sub-title'>{formatDate(date)}</div>
        </PostTitle>
        <Controls>
          <div>Clock Size</div>
          <input
            type='range'
            value={size}
            min={40}
            max={800}
            step={5}
            onChange={e => setSize(e.target.value)}
          />
        </Controls>
        <Clock>
          <div ref={clock} />
        </Clock>
        <Markdown dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query ClockQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^/visualizations/high-school-clock/" } } }
    ) {
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
