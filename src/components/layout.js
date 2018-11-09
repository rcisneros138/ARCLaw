import React from 'react'
import '../assets/scss/main.scss'

import Header from './Header'
import Footer from './Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
      isMobile: false,
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    if (window.innerWidth < 1000) {
      this.setState({ isMobile: true })
    }
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    const isMobile = window.innerWidth < 1000
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile })
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <Header isMobile={this.state.isMobile} />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template
