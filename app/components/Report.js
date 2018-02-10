import React from 'react'
import PropTypes from 'prop-types'

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

Report.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired
}

export default Report
