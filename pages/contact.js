import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import ContactListItem from '../shared/ContactListItem'

export default class Contact extends React.Component {
  render () {
    return (
      <DocumentTitle title={`${config.siteTitle} | Contact`}>
        <main>
          <ul className='contactListItems'>
            <ContactListItem
              icon='envelope-o'
              href='mailto:emily@emilyaviva.com'
              text='Email: emily@emilyaviva.com'
            />
            <ContactListItem
              icon='github'
              href='https://github.com/emilyaviva'
              text='GitHub: EmilyAviva'
            />
            <ContactListItem
              icon='twitter'
              href='https://twitter.com/emilyaviva'
              text='Twitter: @EmilyAviva'
            />
            <ContactListItem
              icon='linkedin'
              href='https://linkedin.com/in/emilykapor'
              text='LinkedIn: My profile'
            />
          </ul>
        </main>
      </DocumentTitle>
    )
  }
}
