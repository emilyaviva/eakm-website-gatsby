import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Navbar extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li><Link to={prefixLink('/')}>About</Link></li>
          <li><Link to={prefixLink('/portfolio/')}>Portfolio</Link></li>
          <li><Link to={prefixLink('/talks/')}>Talks</Link></li>
          <li><Link to={prefixLink('/resume/')}>Resume</Link></li>
          <li><Link to={prefixLink('/contact/')}>Contact</Link></li>
        </ul>
      </nav>
    )
  }
}
