import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import Navbar from '../shared/Navbar'

import { rhythm } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any
    }
  },
  render () {
    return (
      <header>
        <Headroom wrapperStyle={{marginBottom: rhythm(1)}}>
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(3 / 4)} ${rhythm(1 / 2)}`
            }}
          >
            <Link to={prefixLink('/')}>
              <h1>Emily Aviva Kapor-Mater</h1>
              <h2>Full-Stack Software Developer</h2>
            </Link>
            <Navbar />
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1 / 2)}`,
            paddingTop: 0
          }}
        >
          {this.props.children}
        </Container>
      </header>
    )
  }
})
