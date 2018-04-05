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
    // console.log('state', this.state)
    this.setState({deadline: this.state.newDeadline});
  }


  render() {
    return (
      <div className="countdown">
        <div className="countdown__container">
          <div className="countdown--title">CountDown to {this.state.deadline}</div>
            <Clock deadline = {this.state.deadline} />
            <div className="countdown__form">
              <input onChange={event => this.setState({newDeadline: event.target.value})} placeholder="Enter new date" />
              <button onClick={() => this.changeDeadlines()}>Submit!</button>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
