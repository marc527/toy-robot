import React from 'react'
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

export default Robot
