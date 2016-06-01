import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import 'font-awesome/scss/font-awesome.scss'
import 'css/zenburn.css'
import 'scss/local.scss'

export default class Sass extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <main>
          <nav>
            <ul>
              <li><Link to={prefixLink('/portfolio/')}>Portfolio</Link></li>
              <li><Link to={prefixLink('/talks/')}>Talks</Link></li>
              <li><Link to={prefixLink('/resume/')}>Resume</Link></li>
              <li><Link to={prefixLink('/contact/')}>Contact</Link></li>
            </ul>
          </nav>
          <section>
            <img
              className='portrait'
              src={prefixLink('/img/EmilyKaporMaterPhoto.jpg')}
              alt='Photo of Emily'
            />
            <h3>About Me</h3>
            <p>I am a full-stack software developer who finds <em>beauty in simplicity</em>. My mission is to create useful, meaningful, and socially positive experiences for end users and for other developers.</p>
            <p>I am currently seeking software development job opportunities in the Seattle area. I obtained a certificate in Full-Stack JavaScript Development from <a href='https://www.codefellows.org/'>Code Fellows</a> in August 2015.</p>
          </section>
          <section>
            <h3>Competencies</h3>
            <ul>
              <li>
                Front-end client-side and MV* development
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>jQuery</li>
                  <li>Sass</li>
                  <li>CSS</li>
                  <li>HTML</li>
                </ul>
              </li>
              <li>
                Data visualization
                <ul>
                  <li>D3</li>
                  <li>Victory</li>
                  <li>JSON</li>
                  <li>Open data</li>
                </ul>
              </li>
              <li>
                Backend RESTful API and database programming
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Heroku</li>
                  <li>SQL</li>
                  <li>NoSQL</li>
                </ul>
              </li>
              <li>
                Test- and behavior-driven development
                <ul>
                  <li>Webpack</li>
                  <li>Gulp</li>
                  <li>Mocha</li>
                  <li>Karma</li>
                  <li>Chai</li>
                  <li>Jasmine</li>
                </ul>
              </li>
            </ul>
          </section>
        </main>
      </DocumentTitle>
    )
  }
}
