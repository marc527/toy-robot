import React from 'react'
import { validatePosition } from '../util/helpers'

class PlaceCommand extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      x: props.x,
      y: props.y,
      direction: props.direction
    }
  }

  validatePosInput = (e) => {
    if (!validatePosition(e.target.value)) {
      alert('invalid x position, please input an integer between 0 and 4')
      e.target.value = 0
      return false;
    }

    return true;
  }

  handleXChange = (e) => {
    this.validatePosInput(e) && this.setState({
        ...this.state,
        x: parseInt(e.target.value)
    })
  }

  handleYChange = (e) => {

    this.validatePosInput(e) && this.setState({
      ...this.state,
      y: parseInt(e.target.value)
    })
  }

  handleDirection = (e) => {
    this.setState({
      ...this.state,
      direction: e.target.value
    })
  }

  handleSubmit = (e) => {

    let { x, y, direction } = this.state

    this.props.handleSubmit(x, y, direction)
  }

  render() {
    return (
      <div className="place-command-form">
        <hr/>
        <p>Please set the start position of your robot</p>
        <label>X: </label>
        <input
          type="number"
          defaultValue={this.props.x}
          onChange={(e) => this.handleXChange(e)}
        /><br/>
        <label>Y: </label>
        <input type="number"
          defaultValue={this.props.y}
          onChange={this.handleYChange}/><br/>
        <label>Direction: </label>
        <select onChange={this.handleDirection} defaultValue="east">
          <option value="north">NORTH</option>
          <option value="south">SOUTH</option>
          <option value="east">EAST</option>
          <option value="west">WEST</option>
        </select><br/>
        <button onClick={this.handleSubmit}>PLACE</button>
      </div>
    )
  }
}

export default PlaceCommand
