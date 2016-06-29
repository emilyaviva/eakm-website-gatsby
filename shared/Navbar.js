import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Navbar extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <Link to={prefixLink('/')}><li>About</li></Link>
          <Link to={prefixLink('/blog/')}><li>Blog</li></Link>
          <Link to={prefixLink('/portfolio/')}><li>Portfolio</li></Link>
          <Link to={prefixLink('/talks/')}><li>Talks</li></Link>
          <Link to={prefixLink('/resume/')}><li>Resume</li></Link>
          <Link to={prefixLink('/contact/')}><li>Contact</li></Link>
        </ul>
      </nav>
    )
  }
}
