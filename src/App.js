import React, { Component } from 'react';
import classNames from 'classnames';
import illustration from './illustration.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { name: 'Working on Project', isDone: false },
        { name: 'Doing Homework', isDone: false },
        { name: 'College', isDone: true },
        { name: 'Workout', isDone: true }
      ],
      isAdding: false
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">			
          <div className="title">dailist</div>
          <div className="nothing-display">
            <img src={illustration} alt="" className="display-none" />
          </div>
          <div className="list-wrapper">
            <div className="upcoming">
              <p>upcoming</p>
              <div className="upcoming-item item">
                03. Working on Project
              </div>
              <div className="upcoming-item item">
                04. Doing Homework
              </div>
            </div>
            <div className="finished">
              <p>finished</p>
              <div className="finished-item item">
                01. College
              </div>
              <div className="finished-item item">
                02. Workout
              </div>
            </div>
          </div>
          <button id="add-btn">+</button>
        </div>
        <div className="Modal display-none">
          <div className="add-item-wrapper">
            <input type="text" id="new-todo" placeholder="Add something to do..." />
            <button id="add-done">Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
