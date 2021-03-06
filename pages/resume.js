import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'

export default class Resume extends React.Component {
  render () {
    return (
      <DocumentTitle title={`${config.siteTitle} | Resume`}>
        <main>
          <h2>Resume</h2>
          <figure className='pdf'>
            <p>
              <a href={prefixLink('/files/EmilyKaporMaterResume.pdf')}>Download in PDF format</a>
            </p>
            <object
              data={prefixLink('/files/EmilyKaporMaterResume.pdf#toolbar=1&navpanes=0&scrollbar=1&page=1&view=FitH')}
              type='application/pdf'
              width='100%'
              height='650px'
            >
              <p>
                It appears this browser might not have the capability to view embedded PDFs. No biggie…you can <a href={prefixLink('/files/EmilyKaporMaterResume.pdf')}>click here to download the PDF file</a>.
              </p>
            </object>
          </figure>
        </main>
      </DocumentTitle>
    )
  }
}
