import React from 'react';
import './App.css'
import { NavLink } from 'react-router-dom'
import User from './User'
import uuid from 'uuid'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      items: [],
      id: uuid()
    }
  }
  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      title: this.state.title,
      id: this.state.id
    }
   
    const updatedItem = [...this.state.items, newItem];
    console.log(updatedItem)
    this.setState({
      items: updatedItem,
      id: uuid(),
      title: ''
    })

  }
  render() {
    return (
      <div className="container">
        <div className="App">
          <h2>Please, sign-in</h2>
          <span>Name:</span>
          <input type="text" value={this.state.title} className="form-control" onChange={this.handleChange}></input>
          <br />
          <span>Password:</span>
          <input type="password"></input>
          <br />
          <button type="button" onSubmit={this.handleSubmit}><NavLink to="/page">Sign-in</NavLink></button>
        </div>
        <User payload={this.state} />
      </div>
    )

  }
}

export default App;
