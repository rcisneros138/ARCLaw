import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Header = props => (
  <StaticQuery
    query={graphql`
      query HeaderImageQuery {
        headerImage: imageSharp(
          fluid: { originalName: { regex: "/statueOfLib.png/" } }
        ) {
          sizes(maxWidth: 1240) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    `}
    render={data => (
      <section id="header">
        <Img
          sizes={data.headerImage.sizes}
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
            Immigration | Family Law | Wills <br /> Trusts and Estates | Traffic
            | DUI
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

export default Header

// export const pageQuery = graphql`
//   query HeaderImageQuery {
//     headerImage: imageSharp(
//       fluid: { originalName: { regex: "/header.jpg/" } }
//     ) {
//       sizes(maxWidth: 1240) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `
