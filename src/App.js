import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, About, Login } from './components/fake';
import Greeter from './components/greeter';


class App extends Component {
	constructor(props){
		super(props);
		this.state = { user: null };

		this.login = this.login.bind(this);
	}

	login(user) {
		this.setState({user: user});
	}
 
	render() {
		return (
			<Router>
				<div className="App">
					<header className="App-header">
						<div>{/*
							<Link to='/home'>
								<button>home</button>
							</Link>
							<Link to='/about'>
								<button>about</button>
							</Link>
							<Link to='/login'>
								<button>login</button>
							</Link> */}
						</div>
					</header>
					<h1>user is {this.state.user ? this.state.user.username : 'null'}</h1>
					<div>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' render={() => <Greeter login={this.login}/>} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
