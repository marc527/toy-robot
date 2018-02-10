import React from 'react'
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
      for (c=0; c<column; c++) {
        grids.push(<Grid column_number={c} row_number={r} x={x} y={y} direction={direction} key={index} />)
        index++;
      }
    }

    return grids
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

export default Table
