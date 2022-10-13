import React, { Component } from 'react'
import {useNavigate} from 'react-router-dom'
import Home from './Home'

class Customer extends Component {
	constructor(props) {
		super(props)
		
		this.state = {
			username: '',
			address: '',
			phone: '',
			email: ''
		}
	}

	handleUsernameChange = (event) => {
		this.setState({
			username: event.target.value
		})
	}

	handleAddressChange = (event) => {
		this.setState({
			address: event.target.value
		})
	}

	handlePhoneChange = (event) => {
		this.setState({
			phone: event.target.value
		})
	}

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	handleSubmit = (event) => {
		alert(`
		${this.state.username}
		${this.state.address} 
		${this.state.phone} 
		${this.state.email}`)
		event.preventDefault()
	}

  render() {

		const { username, address, phone, email } = this.state;
	return (
	<div>
		<h1>CREATE A CUSTOMER :)</h1>
	  <form onSubmit={this.handleSubmit}>
		<div>
			<label 
			>Name </label>
			<input type="text" 
			value={username} 
			onChange={this.handleUsernameChange} />
		</div>
		<div>
			<label>Address </label>
			<input type="text" 
			value={address} 
			onChange={this.handleAddressChange} />
		</div>
		<div>
			<label>Phone number</label>
			<input type="text" 
			value={phone} 
			onChange={this.handlePhoneChange} />
		</div>
		<div>
			<label>Email </label>
			<input type="text" 
			value={email} 
			onChange={this.handleEmailChange} />
		</div>
		<button type="submit">Submit</button>
	  </form>
	  </div>
	)
  }
}

export default Customer