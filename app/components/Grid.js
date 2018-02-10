import React from 'react'
import Robot from './Robot'

class Grid extends React.Component {

  constructor (props) {
    super(props)

    this.renderRobot = this.renderRobot.bind(this);
  }

  renderRobot () {

    let { column_number, row_number, x, y, direction } = this.props;

    return column_number===x && row_number===y ? <Robot direction={direction} /> : "";

  }

  render() {
    return (
      <div className="grid">
        {this.renderRobot ()}
      </div>
    )
  }
}

export default Grid
