import React, { useRef, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from '@benjaminadk/simple-binary-search-tree'
import Layout from '../../../components/Layout'
import { PostTitle, Markdown } from '../../../templates/Post/styles'
import SEO from '../../../components/seo'
import formatDate from '../../../utils/formatDate'
import styled from 'styled-components'

export const Control = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 20px auto 10px;
  font-family: Arial, Helvetica, sans-serif;
  input[type='number'] {
    text-align: center;
    outline: 0;
  }
  input[type='button'],
  input[type='submit'] {
    padding: 4px;
  }
`

export const Output = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto;
`

export const Tree = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-family: Arial, Helvetica, sans-serif;
`

export default ({ data, location }) => {
  const {
    frontmatter: { title, description, date, image },
    html
  } = data.allMarkdownRemark.edges[0].node

  const reset1 = useRef(null)
  const searchFor1 = useRef(null)
  const linear1 = useRef(null)
  const binary1 = useRef(null)
  const tree1 = useRef(null)
  const reset2 = useRef(null)
  const searchFor2 = useRef(null)
  const linear2 = useRef(null)
  const binary2 = useRef(null)
  const tree2 = useRef(null)

  useEffect(() => {
    const runtime = new Runtime()
    runtime.module(notebook, name => {
      if (name === 'viewof reset1') {
        return new Inspector(reset1.current)
      }
      if (name === 'viewof searchFor1') {
        return new Inspector(searchFor1.current)
      }
      if (name === 'linear1') {
        return new Inspector(linear1.current)
      }
      if (name === 'binary1') {
        return new Inspector(binary1.current)
      }
      if (name === 'tree1') {
        return new Inspector(tree1.current)
      }
      if (name === 'viewof reset2') {
        return new Inspector(reset2.current)
      }
      if (name === 'viewof searchFor2') {
        return new Inspector(searchFor2.current)
      }
      if (name === 'linear2') {
        return new Inspector(linear2.current)
      }
      if (name === 'binary2') {
        return new Inspector(binary2.current)
      }
      if (name === 'tree2') {
        return new Inspector(tree2.current)
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
      />
      <PostTitle>
        <div className='title'>{title}</div>
        <div className='sub-title'>{formatDate(date)}</div>
      </PostTitle>
      <Control ref={reset1} />
      <Control ref={searchFor1} />
      <Output ref={linear1} />
      <Output ref={binary1} />
      <Tree>
        <div ref={tree1} />
      </Tree>
      <Markdown dangerouslySetInnerHTML={{ __html: html }} />
      <Control ref={reset2} />
      <Control ref={searchFor2} />
      <Output ref={linear2} />
      <Output ref={binary2} />
      <Tree>
        <div ref={tree2} />
      </Tree>
    </Layout>
  )
}

export const query = graphql`
  query BinaryQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/^/visualizations/simple-binary-search-tree/" } } }
    ) {
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
