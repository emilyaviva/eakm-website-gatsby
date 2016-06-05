import React from 'react'

export default class PortfolioItem extends React.Component {
  render () {
    return (
      <section className='portfolioItem'>
        <a href={this.props.href}>
          <h3>{this.props.name}</h3>
          <img src={this.props.imageSrc} alt={this.props.imageAlt} />
        </a>
        <p>{this.props.desc}</p>
        <div style={{clear: 'both'}}></div>
      </section>
    )
  }
}
