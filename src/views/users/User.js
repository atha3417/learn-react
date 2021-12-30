import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import Card from "../../components/Card"

function User() {
	const [user, setUser] = useState([])
	const { id } = useParams()

	useEffect(() => {
		const getUser = async () => {
			try {
				const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
				setUser(res.data)
			} catch (e) {
				console.log(e.message);
			}
		}

		getUser()
	}, [id])

	return (
		<div className="mx-16 max-w-xs">
			<Card title={user.name}>
				<p><span className="text-sm font-semibold mt-3">Name:</span> {user.name}</p>
				<p><span className="text-sm font-semibold mt-3">Username:</span> {user.username}</p>
				<p><span className="text-sm font-semibold mt-3">Email:</span> {user.email}</p>
				<p><span className="text-sm font-semibold mt-3">Phone:</span> {user.phone}</p>
				<p><span className="text-sm font-semibold mt-3">Website:</span> {user.website}</p>
				<Link to="/users" className="text-blue-600 underline pt-5">Back</Link>
			</Card>
		</div>
	)
}

export default User
