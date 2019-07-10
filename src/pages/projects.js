import React from 'react'
import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'
import projects from '../data/projects'

export default function Projects() {
  return (
    <Layout page='Projects'>
      <ProjectList projects={projects} />
    </Layout>
  )
}
