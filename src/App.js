import React from 'react'
import { useRecoilState } from "recoil"
import Router from "./router"
import { theme } from "./store"

function App() {
	const [currentTheme, setCurrentTheme] = useRecoilState(theme)
	const defaultTheme = currentTheme == 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'

	return (
		<div className={`${defaultTheme} min-h-screen`}>
			<Router />
		</div>
	)
}

export default App
