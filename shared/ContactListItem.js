import React from 'react'

export default class ContactListItem extends React.Component {
  render () {
    return (
      <li className='contactListItem'>
        <i className={`fa fa-${this.props.icon}`} aria-hidden='false'></i>
        <span style={{marginRight: '12px'}}></span>
        <a href={this.props.href}>{this.props.text}</a>
      </li>
    )
  }
}
