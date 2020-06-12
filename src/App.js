import React, { Component } from 'react';
import classNames from 'classnames';
import illustration from './illustration.svg';
import Item from './components/Item';
import Modal from './components/Modal';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [ ],
      isAdding: false
    }
  }
  openAddForm() {
    return () => this.setState({ isAdding: true });
  }
  addItem(element) {
    return () => {
      this.setState({
        isAdding: false,
        todos: [...this.state.todos, { name: element.value, isDone:false }]
      });
      {
        element.value = '';
      }
    }
  }
  itemClicked(item) {
    return () => {
      const { todos } = this.state;
      const index = todos.indexOf(item);      
      this.setState({
        todos: [
          ...todos.slice(0, index),
          { name: item.name, isDone: !item.isDone },
          ...todos.slice(index + 1)
        ]
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">			
          <div className="title">dailist</div>
          <div className="nothing-display">
            <img src={illustration} alt="" className={ classNames({ 'display-none': this.state.todos.length }) } />
          </div>
          <div className={ classNames('list-wrapper', { 'display-none': !this.state.todos.length }) }>
            <div className="upcoming">
              <p>upcoming</p>
              {
                this.state.todos.map((item, index) => {
                  if (item.isDone === false) {
                    return <Item index={index} item={item} onClick={this.itemClicked(item)} />
                  }
                })
              }
            </div>
            <div className="finished">
              <p>finished</p>
              {
                this.state.todos.map((item, index) => {
                  if (item.isDone === true) {
                    return <Item index={index} item={item} onClick={this.itemClicked(item)} />
                  }
                })
              }
            </div>
          </div>
          <button id="add-btn" onClick={this.openAddForm()}>+</button>
        </div>        
        <Modal isAdding={this.state.isAdding} addItem={this.addItem.bind(this)} />      
      </div>
    );
  }
}

export default App;
