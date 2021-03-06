import React from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'

class Table extends React.Component {

  constructor (props) {
    super(props)
  }

  renderGrids = () => {

    let { column, row, x, y, direction } = this.props
    let c,r,index = 0;
    let grids = [];

    for (r=0; r<row; r++) {

      grids[r] = []

      for (c=0; c<column; c++) {
        grids[r].push(<Grid column_number={c} row_number={r} x={x} y={y} direction={direction} key={index} />);
        index++;
      }
    }

    return grids.reverse()
  }

  render() {

    let { x, y, direction } = this.props

    return (
      <div className="main-table">
        {this.renderGrids()}
      </div>
    )
  }
}

Table.propTypes = {
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired
}

export default Table
