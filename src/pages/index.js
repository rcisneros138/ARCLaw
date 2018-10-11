import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import Justice from '../assets/svg/justice'
import SuiteCase from '../assets/svg/suitCase'
import Will from '../assets/svg/will'
import CourtHouse from '../assets/svg/courtHouse'
import Siren from '../assets/svg/siren'
import Money from '../assets/svg/money'

class Homepage extends React.Component {
  render() {
    const siteTitle = 'Gatsby Starter - Photon'

    return (
      <Layout>
        <Helmet title={siteTitle} />

        <section id="one" className="main style1">
          <div className="grid-wrapper">
            <div className="col-6">
              <header className="major">
                <h2>
                  Meet Anthony Cisneros
                  <br />
                </h2>
              </header>
              <p>
                Graduate of Lewis University in Romeoville, IL where he was a
                member of the Award Winning Lewis University Mock Trial team,
                wrote for the Flyer newspaper, and interned in the Lee County
                states attorneys office where he worked on a family law and
                criminal law cases, including a murder case.
              </p>

              <p>
                {' '}
                After graduating from Lewis University, took the LSAT and scored
                well enough to immediately be accepted into the law program at
                Western Michigan University. While there served as a senator in
                the Delta Theta Pi Power Senate, served as Senior Editor of Law
                Journal, as well as worked in the 30th Districts Veterans
                Memorial court before graduating with a Juris Doctorate and
                moving back to the Chicago Suburbs.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                {/* <img src={pic01} alt="" /> */}
                <Img
                  fluid={this.props.data.AnthonyImage.childImageSharp.fluid}
                />
              </span>
            </div>
          </div>
        </section>

        <section id="two" className="main style2">
          <div className="grid-wrapper offer">
            <div className="col-12">
              <header className="major">
                <h2>What I do</h2>
                <br />
              </header>
            </div>
            <div className="col-4">
              <Justice />
              <h4>Immigration</h4>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
            <div className="col-4">
              <SuiteCase />
              <h4>Family Law</h4>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
            <div className="col-4">
              <Will />
              <h4>Wills</h4>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
            <div className="col-4">
              <Money />
              <h4>Trusts &amp; Estates </h4>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
            <div className="col-4">
              <Siren />
              <h4>Traffic</h4>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>
            <div className="col-4">
              <CourtHouse />
              <h4>DUI</h4>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div>

            {/* <div className="col-6">
              <header>
                <h2 className="center-title">What I do</h2>
                <br />
              </header>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
              <p>
                Blandit faucibus proin. Ac aliquam integer adipiscing enim non
                praesent vis commodo nunc phasellus cubilia ac risus accumsan.
                Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
                varius accumsan lobortis. Blandit ante aliquam lacinia lorem
                lobortis semper morbi col faucibus vitae integer placerat
                accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
                curae consequat feugiat etiam dolore.
              </p>
              <p>
                Adipiscing a commodo ante nunc accumsan interdum mi ante
                adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
                nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
                Adipiscing id accumsan adipiscing ipsum.
              </p>
            </div> */}
          </div>
        </section>

        <section id="three" className="main style1 special">
          <div className="grid-wrapper">
            <div className="col-12">
              <header className="major">
                <h2>Member</h2>
              </header>
              {/* <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p> */}
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic02} alt="" />
              </span>
              <h3>Will County Bar Association</h3>
              <br />
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic03} alt="" />
              </span>
              <h3> Kankakee County Bar Association</h3>

              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic04} alt="" />
              </span>
              <h3>Latino Bar Association</h3>
              <br />
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Homepage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    AnthonyImage: file(relativePath: { eq: "Anthony.jpg" }) {
      ...fluidImage
    }
  }
`
