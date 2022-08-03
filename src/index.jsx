import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  render () {
    return (
      <h1>Cows go Moo</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));