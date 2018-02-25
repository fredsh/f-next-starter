// React
import React, { Children } from 'react'
import PropTypes from 'prop-types'
// Next
import Link from 'next/link'
import Head from 'next/head'
// Styles
import baseStyle from 'styles/css/index.scss'
import css from "styled-jsx/css";

// import style from 'styles/css/index.scss';

import Icon, {Icons} from 'components/icons'

const Header = (props) => {
  return (
    <div>

    </div>
  )
}

const menuItems = [
  {
    value: "Me",
    link: "/",
    icon: "ico"
  },
  {
    value: "CV",
    link: "/",
    icon: "ico"
  },
  {
    value: "Projects",
    link: "/",
    icon: "ico"
  },
  {
    value: "about",
    link: "/",
    icon: "ico"
  }
]

const MenuItem = (props) => {
//   return <Link href="/about">
//   <a>here</a>
// </Link>
  return (
    <React.Fragment>
    {/* <style jsx>{`
    `}</style> */}
    <div className="auto cell">
      <Link href={props.link}>
       <a>{props.value}</a>
      </Link>
    </div>
    </React.Fragment>
  )
}

const Menu = (props) => {
  return (
    <React.Fragment>
    <style jsx>{`
      nav{
        background-color:orange;
        border: solid black;
      }
    `}</style>
      <nav className="grid-x">
      {/* <div className="small-2 cell">
      aaa
      </div>
      <div className="small-2 cell">
      aaa
      </div> */}
        {menuItems.map(item => <MenuItem {...item}/>)}
      </nav>

    </React.Fragment>
  )
}


class Layout extends React.Component {
  render() {
    const {
      children:page
    } = this.props;
    const bp = 800
    const col = 'yellow'
    const aaa = '60%'
    return (
      <React.Fragment>
      <style jsx>{`
          @import 'styles/css/foundation.scss';
          .layout{
            width: 100%;
            @include breakpoint(large) {
              max-width: 90%;
              background-color: ${col};
            }
          }

          .page{
            width: 100%;

            // background-color: green;
            margin: auto;
          }
      `}</style>
      <div id="app" className="layout">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <title>{this.props.title || 'Sunshine Project'}</title>
          {/* <style dangerouslySetInnerHTML={{__html: baseStyle}}/> */}
          {/* <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/> */}
        </Head>
          <Menu/>
          <Icon icon={Icons.CLOUD_CHECK} color='#00ff00'
            //wrapperPresets='square xborder'
            size={32}
            // iconScale={0.9}
          />
          <div className="page">
          {page}
          </div>
      </div>
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  fullWidth: PropTypes.bool,
  withLeftBar: PropTypes.bool,
  withRightBar: PropTypes.bool,
}

export default Layout;