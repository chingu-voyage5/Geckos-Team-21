import React, { Component } from 'react';
import { Link } from 'react-router-dom';




  class LoginPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this); 
    }
 

onSubmit(e){

  e.preventDefault();

  const userData = {
    email: this.state.email,
    password: this.state.password
  };
 
}



onChange(e){

  this.setState({ [e.target.email]: e.target.value });

}

    render() {
   
      return (

        <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your account</p>
              <form action="dashboard.html">
                <div className="form-group">
                  <input type="email" class="form-control form-control-lg" placeholder="Email Address" name="email" />
                </div>
                <div className="form-group">
                  <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" />
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
              <p className="title"> <Link to="/register">Already have an account?</Link></p>
            </div>
          </div>
          
        </div>
        
      </div>
    
      );
    }
  }


  

export default LoginPage;



