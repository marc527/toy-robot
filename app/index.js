import React from 'react'
import ReactDOM from 'react-dom'
require('./styles/main.scss');

import ControlPanel from './containers/ControlPanel'

class App extends React.Component {
  render() {
    return (
      <ControlPanel />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
