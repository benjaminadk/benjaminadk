import React from 'react'
import Layout from '../components/Layout'
import VisualizationList from '../components/VisualizationList'

const visualizations = [{ id: 0, title: 'High School Clock', slug: '/high-school-clock' }]

export default function Visualizations() {
  return (
    <Layout>
      <VisualizationList visualizations={visualizations} />
    </Layout>
  )
}
