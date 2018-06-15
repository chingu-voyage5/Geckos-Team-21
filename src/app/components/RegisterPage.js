import React, { Component } from "react";
import { Link } from "react-router-dom";


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("works");
    const userData = {
      email: this.state.username,
      password: this.state.password
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div class="register">
          <div class="container">
            <div class="row">
              <div class="col-md-8 m-auto">
                <h1 class="display-4 text-center">Sign Up</h1>
                <p class="lead text-center">Create an account</p>
                <form action="create-profile.html">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                    />
                    <small className="form-text text-muted" />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Confirm Password"
                      name="password2"
                    />
                  </div>
                  <input type="submit" class="btn btn-info btn-block mt-4" />
                </form>

                <p>
                  Do you have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

