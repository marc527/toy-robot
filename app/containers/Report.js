import React from 'react'

class Report extends React.Component {

  render() {

    let {x, y, direction} = this.props

    return (
      <div>
      <hr />
      <p>Report</p>
      <ul>
        <li>x: {x}</li>
        <li>y: {y}</li>
        <li>direction: {direction}</li>
      </ul>
      </div>
    )
  }
}

export default Report
