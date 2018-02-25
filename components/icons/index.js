// React
import React, { Children } from 'react'
import PropTypes from 'prop-types'

export {Icons} from './constants'

const Icon = props => {
  const iconSize = props.size * props.iconScale;
  return (
    <React.Fragment>
      <style jsx>{`
        .icon{
          display:inline-block;
          margin:auto;
        }
        .icon-path{
          fill: ${props.color};
        }
        .icon-wrapper{
          display:flex;
          align-items:center;
          background-color: ${props.backgroundColor};
          width:${props.size}px;
          height:${props.size}px;
        }
        @mixin wrapped{
          border: 2px ${props.borderColor};
          border-style: ${props.borderStyle || 'solid'};
        }
        .square{
          @include wrapped;
        }
        .circle{
          @include wrapped;
          border-radius:50%;
        }
        .sborder{
          border-width:1px;
        }
        .xborder{
          border-width:3px;
        }
      `}</style>

      <div className={`icon-wrapper ${props.wrapperPresets}`}>
        <svg
          className="icon"
          width={`${iconSize}px`}
          height={`${iconSize}px`}
          viewBox="0 0 1024 1024"
        >
          <path
            className="icon-path"
            d={props.icon}
          ></path>
        </svg>

      </div>
    </React.Fragment>
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string
};

Icon.defaultProps = {
  size: 16,
  iconScale: 1,
  wrapperPresets: '',
  borderStyle: '',
  borderColor: 'black',
  backgroundColor: 'none'
};

export default Icon;