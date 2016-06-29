import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import moment from 'moment'
import ReactDisqusThread from 'react-disqus-thread'

class MarkdownWrapper extends React.Component {
  handleNewComment (comment) {
    console.log(comment.text)
  }
  render () {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${post.title} | ${config.siteTitle}`}>
        <main className='markdown'>
          <section className='post-header'>
            <span className='date'>
              {moment(post.date || new Date()).format('D MMMM YYYY')}
            </span>
            <h1 className='title'>{post.title}</h1>
          </section>
          <article dangerouslySetInnerHTML={{ __html: post.body }} />
          <ReactDisqusThread
            shortname='example'
            identifier='blahblahblah'
            title='Example Thread'
            url=''
            category_id='123456'
            onNewComment={this.handleNewComment}
          />
        </main>
      </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  router: React.PropTypes.object
}

export default MarkdownWrapper
