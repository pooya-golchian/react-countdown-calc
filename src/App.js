import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
      this.state = {
          deadline: 'December 25, 2017',
          newDeadline: ''
      }
  }


  changeDeadlines() {
    this.setState({deadline: 'November 25, 2017'});
  }


  render() {
    return (
      <div className="countdown">
        <div className="countdown__container">
          <div className="countdown--title">CountDown to {this.state.deadline}</div>
            <Clock />
            <div className="countdown__form">
              <input onChange={event => console.log('event', event.target.value)} placeholder="Enter new date" />
              <button onClick={() => this.changeDeadlines()}>Submit!</button>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
