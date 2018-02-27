import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

// export const Link = NextLink.Link;

const ActiveLink = ({ router, children, activeClassName, ...props }) => {
  const child = Children.only(children)
  // const {activeClassName, ...rest} = props;

  let className = child.props.className || null
  if (router.pathname === props.href && activeClassName) {
    className = `${className !== null ? className : ''} ${activeClassName}`.trim()
  }

  // delete props.activeClassName
  // console.log('link', props)
  return <Link {...props}>{React.cloneElement(child, { className })}</Link>
}

export default withRouter(ActiveLink)