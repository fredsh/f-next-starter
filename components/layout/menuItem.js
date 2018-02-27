// React
import React, { Children } from 'react'
import PropTypes from 'prop-types'
// Next
import Link from 'next/link'
import ActiveLink from 'components/Link'

import Icon, {Icons} from 'components/icons'

const MenuItem = (props) => {
  // const selected = props.selected;
  return (
    <React.Fragment>
    <style jsx>{`
      .menu-item{
        display:flex;
        padding-top:5px;
        &:hover{
          background-color:blue;
        }
      }
      .selected{
        border-bottom: 2px solid white;
      }
      .menu-icon-label{
        text-align:center;
      }
      a{
        width:100%;
        // margin:auto;
        text-decoration:none;
        font-size:16px;
      }
    `}</style>
    <div className={`${props.className} menu-item`}>
      <ActiveLink href={props.link} activeClassName='selected'>
       <a>
         <Icon
            icon={props.icon}
            color='#00ff00' size={32}
            iconScale={0.8}
            centered
            backgroundColor='blue'
            wrapperPresets='circle'
         />
         <div className="menu-icon-label" onClick={(e) => console.log('click', e)}>{props.value}</div>
       </a>
      </ActiveLink>
    </div>
    </React.Fragment>
  )
}

export default MenuItem