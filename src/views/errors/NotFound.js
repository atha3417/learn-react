import React from 'react'
import { Link } from "react-router-dom"

function NotFound() {
	return (
		<div className="flex items-center justify-center">
			<div className="w-9/12 pt-16 mt-4">
				<div className="overflow-hidden sm:rounded-lg pb-8">
					<div className="text-center pt-8">
						<h1 className="text-9xl font-bold text-purple-400">404</h1>
						<h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
						<p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
						<Link to="/" className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
							HOME
						</Link>
						<Link to="/contac" className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold px-6 py-3 rounded-md">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotFound
