import React from 'react'
import AuthenticatedUser from "./components/AuthenticatedUser"
import { UserProvider } from './context/User'

function Home(props) {
	return (
		<div className="container mx-auto flex">
			<UserProvider>
				<span className="mr-1">My name is</span> <AuthenticatedUser />
			</UserProvider>
		</div>
	)
}

export default Home