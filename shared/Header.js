import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Navbar from './Navbar'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='header-body'>
          <Link to={prefixLink('/')}>
            <h1>Emily Aviva Kapor-Mater</h1>
            <h2>Full-Stack Software Developer</h2>
          </Link>
          <Navbar />
        </div>
      </header>
    )
  }
}
