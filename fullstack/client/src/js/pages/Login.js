import React from "react";
import { IndexLink, Link } from "react-router";
import axios from "axios"

export default class Login extends React.Component {
  
	constructor(props) {
		super(props)
		this.state = {
			username : '',
			password : ''
		}
	}

	handlechange(e) {
		if(e.target.id == 'username') {
			this.setState({ username : e.target.value});
		} else {
			this.setState({ password : e.target.value});
		}
		
	}

	validateUser(e) {
		console.log('validating user');
		console.log(this.state);
		axios.post('http://localhost:5000/login',this.state)
		.then(function (response) {
    		console.log(response);
  		})
		e.preventDefault()
	}

  	render() {
    	return (
    		<ul class="list-unstyled">
        		<form class="form-inline" onSubmit={this.validateUser.bind(this)} >
				  	<li class="form-inline">
				    	<label >UserName:</label>
				    	<input type="text" onChange={this.handlechange.bind(this)} placeholder="Enter Username" class="form-control" id="username"></input>
				  	</li>
				  	<li class="form-inline">
				    	<label>Password:</label>
				    	<input type="password" onChange={this.handlechange.bind(this)}  placeholder="Enter password" class="form-control" id="password"></input>
				  	</li>
				  	<li class="checkbox">
				    	<label><input type="checkbox"></input>Remember me</label>
				  	</li>
				  	<button type="submit" class="btn btn-default">Submit</button>
				</form>
	      </ul>
    	);
  	}
}
