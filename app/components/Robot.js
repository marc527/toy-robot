import React from 'react'
import PropTypes from 'prop-types'
import GoChevronRight from 'react-icons/lib/go/chevron-right'

class Robot extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    return (
      <span className={[this.props.direction, "robot"].join(' ')}><GoChevronRight /></span>
    )
  }
}

Robot.propTypes = {
  direction: PropTypes.string.isRequired
}

export default Robot
