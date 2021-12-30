import React from 'react';
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="">
			<div className="min-h-screen bg-gray-200 flex items-center justify-center">
				<div className="bg-gradient-to-br from-gray-500 via-gray-400/60 to-gray-300 border shadow-md w-1/3 rounded-lg">
					<h1 className="text-3xl font-medium border-b mb-5 px-4 py-2.5">Login</h1>
					<form className="px-4">
						<div className="mb-6">
							<label htmlFor="firstname">First Name</label>
							<input type="text" className="w-full h-9 mt-3 border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-gray-400/80 rounded-md transition duration-300 p-2" autoFocus />
						</div>
						<div className="mb-6">
							<label htmlFor="lastname">Last Name</label>
							<input type="text" className="w-full h-9 mt-3 border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-gray-400/80 rounded-md transition duration-300 p-2" />
						</div>
						<div className="flex items-center justify-between">
							<button type="submit" className="w-24 h-10 bg-gray-500/70 text-white rounded-md hover:bg-gray-600/70 transition duration-300 focus:outline-none focus:ring focus:ring-gray-400">Login</button>
							<div>
								<Link to="/" className="underline text-blue-800 font-semibold">Home</Link>
								<span className="mx-2"></span>
								<Link to="/register" className="underline text-blue-800 font-semibold">Register</Link>
							</div>
						</div>
					</form>
					<div className="px-4 pb-7 font-semibold text-lg"></div>
				</div>
			</div >
		</div >
	)
}

export default Login;
