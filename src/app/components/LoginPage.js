import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LoginPage extends Component {

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <h2>
          <Link to="/main/1">Main Page</Link>
        </h2>
      </div>)
  }
}

export default LoginPage;

