// React
import React, { Children } from 'react'
import PropTypes from 'prop-types'
// Next
import Link from 'next/link'
import Head from 'next/head'
// Styles
import baseStyle from 'styles/css/index.scss'

class Layout extends React.Component {
  render() {
    const {
      children:page
    } = this.props;
    return (
      <div id="app" className="layout">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title || 'Sunshine Project'}</title>
          <style dangerouslySetInnerHTML={{__html: baseStyle}}/>
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
        </Head>
        <React.Fragment>
        <style jsx>{`
          div{
            background-color: green;
            width: 1200px;
            margin: auto;
          }
          /*.hello{
            background-color: red
          }*/
          `}</style>
          <div>
          {page}
          </div>
        </React.Fragment>
      </div>
    )
  }
}

Layout.propTypes = {
  fullWidth: PropTypes.bool,
  withLeftBar: PropTypes.bool,
  withRightBar: PropTypes.bool,
}

export default Layout;