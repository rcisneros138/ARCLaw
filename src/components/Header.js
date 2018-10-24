import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { IconContext } from 'react-icons'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Justice from '../assets/svg/justice'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topOfPage: true,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  changeNavStyle = isTop => {
    this.setState({ topOfPage: isTop })
  }

  handleScroll = () => {
    const isTopOfPage = window.scrollY < 50
    if (isTopOfPage !== this.state.topOfPage) {
      this.changeNavStyle(isTopOfPage)
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeaderImageQuery {
            headerImage: file(relativePath: { eq: "statueOfLib.png" }) {
              childImageSharp {
                fluid(maxWidth: 3840, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <section id="header">
            <div className={this.state.topOfPage ? 'navigation' : 'scrollNav'}>
              <IconContext.Provider value={{ className: 'navIcons' }}>
                {/* <div className="logo">
                  <a>
                    <p className="Cisneros"> Cisneros</p> <Justice />{' '}
                    <p className="Law">Law</p>
                  </a>
                </div> */}
                <div className="contactInfo">
                  <a href="tel:815-441-3708">
                    <FaPhone /> + 815 441 3708
                  </a>
                  <a href="mailto:CisnerosLaw138@gmail.com">
                    <FaEnvelope />
                    CisnerosLaw138@gmail.com
                  </a>
                  <a>
                    <FaMapMarkerAlt />
                    Address
                  </a>
                </div>
              </IconContext.Provider>
              <div />
            </div>

            <Img
              fluid={data.headerImage.childImageSharp.fluid}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
              }}
            />
            <div className="inner">
              <span className="icon major fa-gavel" />
              <h1>
                <strong> Cisneros Law P.C.</strong>{' '}
              </h1>
              <p>
                Immigration | Family Law | Wills <br /> Trusts and Estates |
                Traffic | DUI
              </p>
              <ul className="actions">
                <li>
                  <a href="#one" className="button scrolly">
                    About Me
                  </a>
                </li>
              </ul>
            </div>
          </section>
        )}
      />
    )
  }
}
export default Header
