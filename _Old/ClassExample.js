import { Component } from "react";
import './App.css';

class ClassExample extends Component {
	constructor() {
		super()

		this.state = {
			firstname: '',
			lastname: '',
			name: ''
		}
	}

	changeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submithandler = (e) => {
		e.preventDefault()
		this.setState({
			name: `${this.state.firstname} ${this.state.lastname}`,
		})
		this.state.firstname = ''
		this.state.lastname = ''
	}

	render() {
		const { name } = this.state
		return (
			<div className="min-h-screen bg-gray-100 flex items-center justify-center">
				<div className="bg-gradient-to-br from-gray-300 via-gray-400/60 to-gray-300 border shadow-md w-1/3 rounded-lg">
					<h1 className="text-3xl font-medium border-b mb-5 px-4 py-2.5">Learn React JS</h1>

					<form onSubmit={this.submithandler} className="px-4">
						<div className="mb-6">
							<label htmlFor="firstname">First Name</label>
							<input type="text" className="w-full h-9 mt-3 border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-gray-400/80 rounded-md transition duration-300" id="firstname" name="firstname" value={this.state.firstname} onChange={this.changeHandler} autoFocus />
						</div>
						<div className="mb-6">
							<label htmlFor="lastname">Last Name</label>
							<input type="text" className="w-full h-9 mt-3 border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-gray-400/80 rounded-md transition duration-300" id="lastname" name="lastname" value={this.state.lastname} onChange={this.changeHandler} />
						</div>
						<div>
							<button type="submit" className="w-full h-10 bg-gray-500/70 text-white rounded-md hover:bg-gray-600/70 transition duration-300 focus:outline-none focus:ring focus:ring-gray-400">Show</button>
						</div>
					</form>

					<div className="my-3 px-4 py-2 font-semibold text-lg">
						My name is {name ? name : '...'}
					</div>
				</div>
			</div>
		);
	}
}

export default ClassExample;
