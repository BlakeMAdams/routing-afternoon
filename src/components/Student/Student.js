import React, { Component } from 'react';
import Axios from 'axios';

export default class Student extends Component {
	constructor() {
		super();

		this.state = {
			studentInfo: []
		}
	}
	componentDidMount() {
		return Axios.get('http://localhost:3005/students/' + this.props.match.params.id).then(res => {
			this.setState({
				studentInfo: res.data
			})
			console.log(this.state.studentInfo)
		})
	}

	render() {
		
		return (
			<div>
				<h1>Student</h1>

				<h3>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h3>
				<p>Grade: {this.state.studentInfo.grade}</p>
				<p>Email: {this.state.studentInfo.email}</p>
				

			</div>

		)
	}
}