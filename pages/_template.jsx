import React from 'react'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

class Template extends React.Component {
  render () {
    return (
      <div className='page-wrap'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any
}

export default Template
