import React, { Component } from 'react';

class Greeter extends Component {
	constructor(props){
		super(props);
		this.state = { login: true , username: ''};

		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleUsernameChange(event){
		this.setState({username: event.target.value});
	}

	handleSubmit(event){
		this.props.login({username: this.state.username});
		
		event.preventDefault();
	}

	render() {
		const bottom = this.state.login ? (<p> you are in login </p>) : (<h3> in dignup now!! </h3>);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor='username'>Username</label>
					<input type='text' id='username' value={this.state.username} onChange={this.handleUsernameChange}/>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password' />
					<a>Signup</a>
					{bottom}
					<input type='submit' value='Submit' />
				</form>
			</div>
		);
	}
};

export default Greeter