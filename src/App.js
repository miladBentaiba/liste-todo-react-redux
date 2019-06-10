import React, { Component } from 'react'

import Header from './Header'
import ListToDo from './ListToDo'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>List To Do</h2>
        <Header />
        <ListToDo />
      </div>
    );
  }
}