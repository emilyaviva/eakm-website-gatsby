import React from 'react'
import { Link } from 'react-router'
import { includes, sortBy } from 'lodash'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'

class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !includes(page.path, '/404')) {
        const title = access(page, 'data.title') || page.path
        pageLinks.push(
          <li key={page.path}>
            <Link to={prefixLink(page.path)}>{title}</Link>
          </li>
        )
      }
    })
    return (
      <DocumentTitle title={config.blogTitle}>
        <main className='blog-index'>
          <ul>
            {pageLinks}
          </ul>
        </main>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
}

export default BlogIndex
