import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${p => p.theme.maxWidth};
  margin: 0 auto;
  .title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
  }
`

const About = props => {
  return (
    <Layout pathname={props.location.pathname}>
      <Container>
        <div className='title'>About</div>
        <div className='content'>I am a JavaScript developer.</div>
      </Container>
    </Layout>
  )
}

export default About
