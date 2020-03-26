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
      items: [],
    }
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  validateForm = (email, password) => {
    return (email.length > 0 && password.length > 0);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      email: this.state.email
    }

    const updatedItem = [... this.state.items, newItem];
    this.setState({
      email: "",
      items: updatedItem
    })
  }
  render() {
    return (
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
            <Button block bsSize="large" disabled={!this.validateForm} type="submit">
              Sign-in
          </Button>
          </NavLink>
        </form>
        <User payload={this.state} />
      </div>
    );
  }

}


