// React
import React, { Children } from 'react'
import PropTypes from 'prop-types'
// Next
import Link from 'next/link'

import MenuItem from './menuItem'


const Menu = (props) => {
  return (
    <React.Fragment>
    <style jsx>{`
      nav{
        background-color:orange;
        align:right;
        // width:100%
      }
    `}</style>
      <nav className={`${props.className} grid-x`}>
        {props.menuItems.map(item => <MenuItem className='cell auto' {...item} selected/>)}
      </nav>
    </React.Fragment>
  )
}

export default Menu;
