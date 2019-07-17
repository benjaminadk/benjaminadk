import React, { useRef, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from '@benjaminadk/embed-version-color-generator'
import Helmet from 'react-helmet'
import Layout from '../../../components/Layout'
import { PostTitle, Markdown } from '../../../templates/Post/styles'
import { Controls, Palettes, Strings, Input } from './styles'
import formatDate from '../../../utils/formatDate'

export default ({ data }) => {
  const {
    frontmatter: { title, date },
    html
  } = data.allMarkdownRemark.edges[0].node

  const [rows, setRows] = useState(3)
  const [color1, setColor1] = useState('#be64ac')
  const [color2, setColor2] = useState('#5ac8c8')
  const [lightest, setLightest] = useState('#e8e8e8')
  const [colorMode, setColorMode] = useState('rgb')

  const palettes = useRef(null)
  const output1 = useRef(null)
  const output2 = useRef(null)
  const rowsRef = useRef(null)
  const color1Ref = useRef(null)
  const color2Ref = useRef(null)
  const lightestRef = useRef(null)
  const colorModeRef = useRef(null)

  useEffect(() => {
    const runtime = new Runtime()
    runtime.module(notebook, name => {
      if (name === 'palettes') {
        return new Inspector(palettes.current)
      }
      if (name === 'output1') {
        return new Inspector(output1.current)
      }
      if (name === 'output2') {
        return new Inspector(output2.current)
      }
      if (name === 'mutable rows') {
        return {
          fulfilled: value => {
            rowsRef.current = value
          }
        }
      }
      if (name === 'mutable color1') {
        return {
          fulfilled: value => {
            color1Ref.current = value
          }
        }
      }
      if (name === 'mutable color2') {
        return {
          fulfilled: value => {
            color2Ref.current = value
          }
        }
      }
      if (name === 'mutable lightest') {
        return {
          fulfilled: value => {
            lightestRef.current = value
          }
        }
      }
      if (name === 'mutable colorMode') {
        return {
          fulfilled: value => {
            colorModeRef.current = value
          }
        }
      }
    })
  }, [])

  useEffect(() => {
    if (rowsRef.current) {
      rowsRef.current.value = rows
    }
  }, [rows])

  useEffect(() => {
    if (color1Ref.current) {
      color1Ref.current.value = color1
    }
  }, [color1])

  useEffect(() => {
    if (color2Ref.current) {
      color2Ref.current.value = color2
    }
  }, [color2])

  useEffect(() => {
    if (lightestRef.current) {
      lightestRef.current.value = lightest
    }
  }, [lightest])

  useEffect(() => {
    if (colorModeRef.current) {
      colorModeRef.current.value = colorMode
    }
  }, [colorMode])

  return (
    <>
      <Helmet />
      <Layout>
        <PostTitle>
          <div className='title'>{title}</div>
          <div className='sub-title'>{formatDate(date)}</div>
        </PostTitle>
        <Controls>
          <Input>
            <span className='label'>Rows</span>
            <input
              type='range'
              value={rows}
              min={2}
              max={6}
              step={1}
              onChange={e => setRows(e.target.value)}
            />
            <span className='value'>{rows}</span>
          </Input>
          <Input>
            <span className='label'>Color 1</span>
            <input type='color' value={color1} onChange={e => setColor1(e.target.value)} />
            <span className='value'>{color1}</span>
          </Input>
          <Input>
            <span className='label'>Color 2</span>
            <input type='color' value={color2} onChange={e => setColor2(e.target.value)} />
            <span className='value'>{color2}</span>
          </Input>
          <Input>
            <span className='label'>Lightest</span>
            <input type='color' value={lightest} onChange={e => setLightest(e.target.value)} />
            <span className='value'>{lightest}</span>
          </Input>
          <Input>
            <span className='label'>Color Mode</span>
            <select value={colorMode} onChange={e => setColorMode(e.target.value)}>
              <option value='rgb'>RGB</option>
              <option value='lab'>Lab</option>
              <option value='lrgb'>Linear RGB</option>
              <option value='lch'>Lch</option>
            </select>
          </Input>
        </Controls>
        <Palettes>
          <div ref={palettes} />
        </Palettes>
        <Strings>
          <div ref={output1} />
        </Strings>
        <Strings>
          <div ref={output2} />
        </Strings>
        <Markdown dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query BivariateQuery {
    allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "/^/visualizations/bivariate-choropleth-color-generator/" } }
      }
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
