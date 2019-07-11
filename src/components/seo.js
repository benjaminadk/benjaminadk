import React from 'react'
import Helmet from 'react-helmet'

function SEO({ title, description, author, lang, page, meta }) {
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${page}`}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  title: 'Benjamin Brooke',
  author: 'Benjamin Brooke',
  description: '',
  page: 'Home',
  meta: []
}

export default SEO
