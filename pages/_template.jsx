import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any
    }
  },
  render () {
    return (
      <div className='page-wrap'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})
