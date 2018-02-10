import React from 'react'

import { validatePosition, calculateNextDirection } from '../util/helpers'

class Operations extends React.Component {

  constructor (props) {
    super(props)
  }

  validateNextPos = (next_x, next_y) => {
    if (!validatePosition(next_x) || !validatePosition(next_y)) {
      alert('Dangerous! The robot will fall off the table, please change direction or reset the start position.')
      return false;
    }

    return true;
  }

  handleMove = (e) => {

    let { x, y, direction } = this.props

    let next_x = x, next_y = y;

    switch (direction) {
      case 'north':
        next_y = y-1
        break;
      case 'south':
        next_y = y+1
        break;
      case 'west':
        next_x = x-1
        break;
      case 'east':
        next_x = x+1
        break;
    }

    this.validateNextPos(next_x, next_y) && this.props.onMove(next_x, next_y)

  }

  handleRotate = (e) => {

    let { direction } = this.props

    let next_direction = calculateNextDirection(direction, e.target.id)

    this.props.onRotate(next_direction)

  }

  render() {
    return (
      <div>
        <hr />
        <p>Move your robot or change its directions</p>
        <button onClick={this.handleMove}>MOVE</button><br/>
        <button id="left" onClick={this.handleRotate}>LEFT</button>
        <button id="right" onClick={this.handleRotate}>RIGHT</button>
      </div>
    )
  }
}

export default Operations
