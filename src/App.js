import React from "react";
import { NavLink } from 'react-router-dom'
import User from './User'
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password:"",
      items: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      email: this.state.email.value
    }
    console.log(newItem)
    const updatedItem = [... this.state.items, newItem];
    
    this.setState({
      items: updatedItem,
      email: ""
     
    })
  }
  render() {
    return (
      <div>
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <span>Email:</span>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <span>Password:</span>
              <FormControl
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
              />
            </FormGroup>
            <NavLink to="/page">
              <Button block bsSize="large"  disabled={!(this.state.email.length >0 && this.state.password.length >0)} type="submit">
                Sign-in
              </Button>
            </NavLink>
          </form>
        </div>
        <User payload={this.state} />
      </div>
    );
  }

}


