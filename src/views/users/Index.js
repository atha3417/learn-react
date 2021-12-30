import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Card from "../../components/Card"

function Index() {
	const [users, setUsers] = useState([])

	const getUsers = async () => {
		try {
			let res = await axios.get('https://jsonplaceholder.typicode.com/users')
			setUsers(res.data)
		} catch (e) {
			console.log(e.message)
		}
	}

	useEffect(() => getUsers(), [])

	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-4 gap-5">
				{
					users.map((user) => {
						return (
							<Card title={user.name} key={user.email}>
								<div className="mb-3">
									<span className="text-gray-600">{user.username}</span>
									<Link to={`//${user.website}`} className="underline text-blue-600 block">{user.website}</Link>
								</div>
								<Link to={`/users/${user.id}`} className="text-white bg-blue-700 px-4 py-2 font-semibold block mt-2 rounded-md w-28 h-9 text-sm">View profile</Link>
							</Card>
						)
					})
				}
			</div>
		</div>
	)
}

export default Index
