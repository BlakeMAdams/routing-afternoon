import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class ClassList extends Component {
	constructor() {
		super();

		this.state = {
			students: []
		}
	}

	componentDidMount() {
		return axios.get('http://localhost:3005/students').then(res => {
			this.setState({
				students: res.data
			})
			console.log(this.state.students)
		})
	}

	render() {

		const students = this.state.students.map((student, i) => (
			<div key={i}>
				<h3>Teacher's Pet <Link to={`/student/${student.id}`} >===></Link> {student.first_name}  {student.last_name}</h3>
			</div>
		))
		return (
			<div>
				<h1>ClassList:</h1>
				{students}
			</div>
		)
	}





}