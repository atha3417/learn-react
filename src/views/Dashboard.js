import React from 'react'
import { useRecoilState } from "recoil"
import { theme } from "../store"

function Dashboard(props) {
	const [currentTheme, setCurrentTheme] = useRecoilState(theme)

	return (
		<div className="container">
			<select onChange={(e) => setCurrentTheme(e.target.value)} value={currentTheme} className="border border-gray-800 rounded w-44 text-black">
				<option value="dark">Dark</option>
				<option value="light">Light</option>
			</select>

			<div className="mt-2">You're selecting the {currentTheme}</div>
		</div>
	)
}

export default Dashboard