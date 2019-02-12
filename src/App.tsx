import React, { Component } from 'react';

import Die from './Die';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Die dots={1} />
        <Die dots={2} />
        <Die dots={3} />
        <Die dots={4} />
        <Die dots={5} />
        <Die dots={6} />
      </div>
    );
  }
}

export default App;
