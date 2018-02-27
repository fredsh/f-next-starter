// React
import React, { Children } from 'react'
import PropTypes from 'prop-types'
// Next
import Link from 'next/link'
import Head from 'next/head'
// Redux
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect';
import configureStore from 'store/configure'
// Styles
import Layout from 'components/layout'

// Services
import ClockService from 'services/clock'
import Clock from 'components/Clock'




class AboutPage extends React.Component {
  static getInitialProps({ store, isServer }) {

    return { isServer }
  }

  componentDidMount() {
    // this.timer = this.props.startClock()
  }

  render() {
    // console.log('>>>>>', this.props)
    return (
      <Layout title='about'>
        <div>
          <style jsx>{`
          .hi{
            background-color: yellow;
            width: 1100px;
            margin: auto;
          }
          `}</style>
          <div className="about" style={{ width: 500, height: 200 }}>
            About
          </div>
        </div>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const mapStateToProps = createStructuredSelector({

})

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(
  withReduxSaga(AboutPage)
)