const { createFilePath } = require('gatsby-source-filesystem')
const { compareDesc } = require('date-fns')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                  tags
                  categories
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const tagSet = new Set()
        const categorySet = new Set()

        const posts = result.data.allMarkdownRemark.edges

        posts.sort((a, b) => {
          return compareDesc(new Date(a.node.frontmatter.date), new Date(b.node.frontmatter.date))
        })

        posts.forEach((edge, index) => {
          if (edge.node.frontmatter.tags) {
            edge.node.frontmatter.tags.forEach(tag => {
              tagSet.add(tag)
            })
          }

          if (edge.node.frontmatter.categories) {
            edge.node.frontmatter.categories.forEach(category => {
              categorySet.add(category)
            })
          }

          const nextIndex = index === posts.length - 1 ? 0 : index + 1
          const prevIndex = index === 0 ? posts.length - 1 : index - 1
          const nextNode = posts[nextIndex].node
          const prevNode = posts[prevIndex].node

          createPage({
            path: edge.node.fields.slug,
            component: path.resolve(`./src/templates/Post/index.js`),
            context: {
              slug: edge.node.fields.slug,
              nextTitle: nextNode.frontmatter.title,
              nextSlug: nextNode.fields.slug,
              prevTitle: prevNode.frontmatter.title,
              prevSlug: prevNode.fields.slug
            }
          })
        })

        // TODO
        // create pages of tags and categories
      })
    )
  })
}
