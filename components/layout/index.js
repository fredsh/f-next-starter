// React
import React, { Children } from 'react'
import PropTypes from 'prop-types'
// Next
import ActiveLink from 'components/Link'
import Link from 'next/link'

import Head from 'next/head'
// Styles
import baseStyle from 'styles/css/index.scss'
import css from "styled-jsx/css";

// import style from 'styles/css/index.scss';

import Icon, {Icons} from 'components/icons'
import Logo from './logo'

import Menu from './menu'

const Header = 'div'

const menuItems = [
  // {
  //   key: 'index',
  //   value: "Me",
  //   link: "/",
  //   icon: Icons.CLOUD_CHECK
  // },
  {
    key: 'skills',
    value: "Skills",
    link: "/about",
    icon: Icons.TWITTER
  },
  {
    key:'projects',
    value: "Projects",
    link: "/about",
    icon: Icons.CLOUD_CHECK
  },
  {
    key:'cv',
    value: "CV",
    link: "/cv",
    icon: Icons.STUDY
  },
  {
    key:'contact',
    value: "Contact",
    link: "/contact",
    icon: Icons.MAIL
  },
]





class Layout extends React.Component {
  render() {
    const {
      children:page
    } = this.props;
    const bp = 800
    const col = 'yellow'
    return (
      <React.Fragment>
      <style jsx>{`
          @import 'styles/css/foundation.scss';
          .layout{
            // width: 100%;
            @include breakpoint(large) {
              max-width: 80%;
              background-color: ${col};
            }
          }

          .page{
            // width: 100%;
            margin: auto;
          }

          .header{
            // width:100%;
            background-color:grey;
          }
      `}</style>
      <div id="app" className="layout">
        <Head>
          {/* <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1"/> */}
          <title>{this.props.title || 'f-next-starter'}</title>
        </Head>
        <Header className='grid-x header'>
          <Logo className='cell auto'/>
          <Menu className='cell small-9' menuItems={menuItems}/>
        </Header>
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