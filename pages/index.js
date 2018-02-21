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
// Styling
import Layout from 'components/layout'

// Services
import ClockService from 'services/clock'
import Clock from 'components/Clock'


export const addCount = () => {
  return { type: 'ADD' }
}


class IndexPage extends React.Component {
  static getInitialProps({ store, isServer }) {
    store.dispatch(ClockService.actions.serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer, ooo:!isServer }
  }

  componentDidMount() {
    this.timer = this.props.startClock()
  }

  render() {
    // console.log('>>>>>', this.props)
    return (
      <Layout>
        <div>
          <style jsx>{`
          div{
            background-color: #00FF00;
            width: '1000px';
            margin: auto;

            &.hello{
              background-color: red;
            }
  
          }
        `}</style>
          <div className="hi">
            <div className="hello" style={{ width: 500, height: 200 }}>
              hello
            </div>
          </div>
          <Clock lastUpdate={this.props.clockLastUpdate} light={this.props.clockLight} />
        </div>
      </Layout>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(ClockService.actions.startClock, dispatch)
  }
}

const mapStateToProps = createStructuredSelector({
  clockLastUpdate: ClockService.selectors.time(),
  clockLight: ClockService.selectors.isLight()
})

export default withRedux(configureStore, mapStateToProps, mapDispatchToProps)(
  withReduxSaga(IndexPage)
)