import React, { useEffect, useState } from 'react'
import axios from "axios"

function App(props) {
	const [user, setUser] = useState([])
	const [identifier, setIdentifier] = useState(1)
	const [loading, setLoading] = useState(false)
	const [noData, setNoData] = useState(false)

	const getUser = async () => {
		setLoading(true)
		try {
			let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
			setUser(res.data)
			setLoading(false)
		} catch (e) {
			console.log(e.message)
			setLoading(false)
			setNoData(true)
		}
	}

	useEffect(() => getUser(), [identifier])

	return (
		<div className="">
			<h1 className="text-5xl font-bold text-center pt-3">Users Data</h1>
			<div className="py-8">
				<div className="container mx-auto">
					<div className="flex flex-col">
						<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
								<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<div className="flex">
										<input type="number" min="1" max="10" name="identifier" id="identifier" className="p-2 mx-3 mt-3 mb-3 w-1/5 h-8 border border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-gray-400/80 rounded-md transition duration-300" value={identifier} onChange={e => setIdentifier(e.target.value)} autoFocus autoComplete="off" />
										{
											loading ? <img src="/loader.gif" alt="Loading Gif" className="w-8 h-8 mt-3" /> : ''
										}
									</div>
									<table className="min-w-full divide-y divide-gray-200">
										<thead className="bg-gray-50"><tr>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Name
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Username
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Email
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Website
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Phone
											</th>
										</tr>
										</thead>
										<tbody className="bg-white divide-y divide-gray-200">
											{
												noData ?
													<tr>
														<td colSpan="5" className="text-center text-xl font-bold h-12">No Data Available</td>
													</tr>
													:
													<></>
											}
											<tr key={user.email} className={noData ? 'hidden' : ''}>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{user.name}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{user.username}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{user.email}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{user.website}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{user.phone}
												</td>
											</tr>
											{/* {
												users.map(user => {
													return (
														<tr key={user.email}>
															<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
																{user.name}
															</td>
															<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
																{user.username}
															</td>
															<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
																{user.email}
															</td>
															<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
																{user.website}
															</td>
															<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
																{user.phone}
															</td>
														</tr>
													)
												})
											} */}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default App