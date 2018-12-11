import React from 'react'
import AvvoIcon from '../assets/svg/Avvo'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a href="#" className="icon alt fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
          <li>
            <span>
              <a href="https://www.avvo.com/attorneys/60901-illinois-anthony-cisneros-4989222.html">
                <AvvoIcon />
              </a>
            </span>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            Design: <a href="raymondcisneros.com">Cisneros Web Design</a>
          </li>
        </ul>
      </section>
    )
  }
}

export default Footer
