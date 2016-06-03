import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className='master-footer'>
        <ul>
          <li>
            <a href='//github.com/emilyaviva/eakm-website-gatsby'>
              <i className='fa fa-code-fork' aria-hidden='true'></i>
              <span>Fork this website's code on GitHub</span>
            </a>
          </li>
          <li>
            <i className='fa fa-pencil' aria-hidden='true'></i>
            <span>Built with <a href='//github.com/gatsbyjs'>Gatsby</a></span>
          </li>
        </ul>
      </footer>
    )
  }
}
