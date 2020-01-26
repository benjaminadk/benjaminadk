import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
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
      <SEO
        subtitle='About'
        description=' I am a Software Developer. I work design and develop full stack web
          applications using JavaScript. I combine the art of simplistic design
          with the art of programming using React, GraphQL and Node to create
          performant SPAs.'
        pathname={props.location.pathname}
        isBlogPost={false}
        datePublished='2020-01-01'
      />
      <Container>
        <div className='title'>About</div>
        <div className='content'>
          I am a Software Developer. I work design and develop full stack web
          applications using JavaScript. I combine the art of simplistic design
          with the art of programming using React, GraphQL and Node to create
          performant SPAs. I also enjoy creating data visualizations with D3,
          custom WordPress themes and plugins with PHP, mobile application with
          React Native, and desktop application with Electron. I have a wide
          range of interests and when I can I will share them here. I work full
          time, but am open to taking on freelance work. If you have any
          questions, email is the best way to reach me.
        </div>
      </Container>
    </Layout>
  )
}

export default About
