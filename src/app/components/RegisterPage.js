import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Submit from './Submit';

  class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this); 
    }
 

onSubmit(e){

  e.preventDefault();

  const userData = {
    email: this.state.username,
    password: this.state.password
  };
}

onChange(e){

  this.setState({ [e.target.name]: e.target.value });

}



    render() {
      return (

<div>

< RegisterForm />
< Submit />
<p>Do you have an account? <Link to="/">Login</Link></p>

</div>
      );
    }
  }


  

export default Register;
