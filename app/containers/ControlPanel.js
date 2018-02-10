import React from 'react'
import Table from '../components/Table'
import PlaceCommand from '../components/PlaceCommand'
import Operations from '../components/Operations'
import Report from '../components/Report'

class ControlPanel extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      x: 0,
      y: 0,
      direction: 'east',
      showOperations: false
    }
  }

  initialSetup = (x, y, direction) => {
    this.setState({
      x,
      y,
      direction,
      showOperations: true
    })
  }

  handlePositionChange = (x, y) => {
    this.setState({
      ...this.state,
      x,
      y
    })
  }

  handleDirectionChange = (direction) => {
    this.setState({
      ...this.state,
      direction
    })
  }

  toggleOperationsPanel = (showOperations) => {
    this.setState({
      ...this.state,
      showOperations
    })
  }

  render() {
    let {x, y, direction, showOperations} = this.state

    return (
      <div className="control-panel">
        <Table
          column={5}
          row={5}
          x={x}
          y={y}
          direction={direction}
       />

       <Report x={x} y={y} direction={direction} />

       <PlaceCommand x={x} y={y} direction={direction} handleSubmit={this.initialSetup} onUpdate={this.toggleOperationsPanel} />
       { showOperations && <Operations
          x={x}
          y={y}
          direction={direction}
          onMove={this.handlePositionChange}
          onRotate={this.handleDirectionChange}
         /> }
      </div>
    )
  }
}

export default ControlPanel
