import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className='footer-body'>
          <ul>
            <li>
              <a href='//github.com/gatsbyjs'>
                <i className='fa fa-pencil' aria-hidden='true'></i>
                Built with Gatsby
              </a>
            </li>
            <li>
              <a href='//github.com/emilyaviva/eakm-website-gatsby'>
                <i className='fa fa-code-fork' aria-hidden='true'></i>
                Fork my website's code on GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}
