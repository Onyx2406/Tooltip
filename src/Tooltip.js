import React, { Component } from 'react';
import './tooltip.css';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  onHover = () => {
    this.setState({
      hovered: true
    })
  }

  onLeave = () => {
    this.setState({
      hovered: false
    })
  }

  render() {
    const { position, text, fontSize, padding, textColor, bgColor, radius, tooltipWidth, arrowHeight, image } = this.props;
    const { hovered } = this.state;

    const style = {
      visibility: hovered ? 'visible' : 'hidden',
      fontSize: fontSize + 'px',
      padding: padding + 'px',
      color: textColor,
      backgroundColor: bgColor,
      borderRadius: radius + 'px',
      width: tooltipWidth + 'px',
    };

    return (
      <div className='tooltip' onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
        {position}

        {/* tooltip text */}
        <span style={style} className={`tooltiptext ${position}`}>
          {image && <img src={image} alt="tooltip" style={{ maxWidth: '100%' }} />}
          {text}
        </span>
      </div>
    )
  }
}
