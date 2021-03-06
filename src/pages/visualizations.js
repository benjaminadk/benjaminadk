import React from 'react'
import Layout from '../components/Layout'
import VisualizationList from '../components/VisualizationList'

const visualizations = [
  { id: 0, title: 'High School Clock', slug: '/high-school-clock' },
  {
    id: 1,
    title: 'Bivariate Choropleth Color Generator',
    slug: '/bivariate-choropleth-color-generator'
  },
  {
    id: 2,
    title: 'Minesweeper',
    slug: '/minesweeper'
  },
  {
    id: 3,
    title: 'Simple Binary Search Tree',
    slug: '/simple-binary-search-tree'
  }
]

export default function Visualizations(props) {
  return (
    <Layout pathname={props.location.pathname}>
      <VisualizationList visualizations={visualizations} />
    </Layout>
  )
}
