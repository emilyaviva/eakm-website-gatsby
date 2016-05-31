import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={prefixLink('/emily-small.jpg')}
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            'border-radius': '50%',
          }}
        />
        By <strong>{config.authorName}</strong>. <a href="https://twitter.com/EmilyAviva">Follow me on Twitter!</a>
      </p>
    )
  }
}

export default Bio
