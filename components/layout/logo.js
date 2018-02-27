// React
import React, { Children } from 'react'
import PropTypes from 'prop-types'
// Next
import Link from 'next/link'

import Icon, {Icons} from 'components/icons'


const Logo = (props) => {
  return (
    <React.Fragment>
    <style jsx>{`
      .logo{
        background-color:black;
        align:right;
        padding-left: 5px 5px 5px 5px;
        border-bottom: 2px solid black;
        // width:100%
      }
    `}</style>
    <Link href='/'>
      <a className={`${props.className} logo`}>
        <Icon
          icon={Icons.TERMINAL}
          color='#00ff00' size={46}
          iconScale={0.8}
          // centered
          // backgroundColor='yellow'
          // wrapperPresets=''
        />
      </a>
    </Link>
    </React.Fragment>
  )
}

export default Logo;