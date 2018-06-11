import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import Submit from './Submit';

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

  this.setState({ [e.target.name]: e.target.value });

}



    render() {
      return (

<div>
<h2 className="title"> <Link to="/main/1">Youtube List APP</Link></h2>


< Form />
< Submit />

</div>
      );
    }
  }


  

export default LoginPage;


